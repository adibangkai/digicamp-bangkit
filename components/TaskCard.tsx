"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import { editTask, deleteTask } from "@/actions";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { act } from "react-dom/test-utils";

interface TaskType {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };
}

export default function TaskCard({ task }: TaskType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { pending } = useFormStatus();
  const [formEdit, setFormEdit] = useState({
    ...task,
  });

  return (
    <>
      <div
        onClick={onOpen}
        className="w-1/6 bg-slate-50 w-full rounded-lg shadow-md min-h-[100px] p-4 hover:bg-slate-100 cursor-pointer grid"
      >
        <h2 className="text-md font-bold text-left">{task.title}</h2>
        <p className="text-sm font-light truncate">{task.description}</p>
        <p
          className={`text-sm text-right mt-4 done font-semibold`}
          style={{ color: `var(--${task.status})` }}
        >
          {task.status}
        </p>
      </div>{" "}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {task.title}
              </ModalHeader>

              <ModalBody>
                <Textarea
                  name="description"
                  placeholder="describe your task"
                  value={formEdit.description}
                  onChange={(e) =>
                    setFormEdit((s) => ({ ...s, description: e.target.value }))
                  }
                />
                <Select
                  label="Select Status"
                  name="status"
                  className="max-w-xs"
                  onChange={(e) =>
                    setFormEdit((s) => ({ ...s, status: e.target.value }))
                  }
                >
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
              </ModalBody>
              <ModalFooter>
                <form action={deleteTask.bind(null, task.id)}>
                  <Button
                    variant="bordered"
                    type="submit"
                    color="danger"
                    isLoading={pending}
                  >
                    Delete
                  </Button>
                </form>
                <input type="hidden" value={task.id} />
                <form action={editTask.bind(null, formEdit)}>
                  <Button color="primary" type="submit" isLoading={pending}>
                    Save
                  </Button>
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
