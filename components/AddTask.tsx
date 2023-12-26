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

export default function AddTask() {
  return (
    <div className="mx-20">
      <Popover placement="right">
        <PopoverTrigger>
          <Button>add task</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form>
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
              <Select label="Select Status" className="max-w-xs">
                <SelectItem value="error" key="error">
                  On Going
                </SelectItem>
                <SelectItem value="todo" key="todo">
                  Done
                </SelectItem>
                <SelectItem value="ongoing" key="ongoing">
                  Error
                </SelectItem>
              </Select>
              <Button>Save</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
