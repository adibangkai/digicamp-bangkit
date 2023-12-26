"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface FormEditType {
  id: number;
  title: string;
  description: string;
  status: string;
}

//server action for edit task
export async function editTask(formEdit: FormEditType) {
  const { id, title, description, status } = formEdit;
  await db.task.update({
    where: { id },
    data: { title, description, status },
  });

  revalidatePath(`/`);
}

//server action for delete task
export async function deleteTask(id: number) {
  await db.task.delete({
    where: { id },
  });

  revalidatePath(`/`);
}

//server action for create task
export async function createTask(
  formState: { message: string },
  formData: FormData
) {
  //add validation for initial task
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as string;

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "title must be longer",
      };
    }

    //create record
    const task = await db.task.create({
      data: {
        title,
        description,
        status,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "something went wrong....",
      };
    }
  }

  //redirect  root
  redirect("/");
}
