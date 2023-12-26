"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

interface FormEditType {
  id: number;
  title: string;
  description: string;
  status: string;
}
export async function editTask(formEdit: FormEditType) {
  const { id, title, description, status } = formEdit;
  await db.task.update({
    where: { id },
    data: { title, description, status },
  });

  redirect(`/`);
}

export async function deleteTask(id: number) {
  await db.task.delete({
    where: { id },
  });

  redirect(`/`);
}

export async function createTask(
  formState: { message: string },
  formData: FormData
) {
  //validation
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as string;

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "title must be longer",
      };
    }
    if (typeof description !== "string" || description.length < 10) {
      return {
        message: "description must be longer",
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

  //redirect to root
  redirect("/");
}
