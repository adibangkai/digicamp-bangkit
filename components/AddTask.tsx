"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";
import { createTask } from "@/actions";

export default function AddTask() {
  const { pending } = useFormStatus();
  const [formState, action] = useFormState(createTask, { message: "" });

  return (
    <div className="mx-20">
      <Popover placement="right">
        <PopoverTrigger>
          <Button variant="bordered">add task</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">Add Task</h3>
              <Input
                name="title"
                label="title"
                labelPlacement="outside"
                placeholder="Title"
              />
              <Textarea
                name="description"
                label="description"
                labelPlacement="outside"
                placeholder="describe your task"
              />
              <Select label="Select Status" name="status" className="max-w-xs">
                <SelectItem value="error" key="ongoing">
                  Ongoing
                </SelectItem>
                <SelectItem value="todo" key="done">
                  Done
                </SelectItem>
                <SelectItem value="todo" key="todo">
                  Todo
                </SelectItem>
                <SelectItem value="ongoing" key="error">
                  Error
                </SelectItem>
              </Select>
              {formState?.message ? (
                <div className="bg-red-200 p-2 rounded mt-2 capitalize">
                  {formState.message}
                </div>
              ) : null}
              <Button type="submit" color="primary" isLoading={pending}>
                Add
              </Button>{" "}
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
