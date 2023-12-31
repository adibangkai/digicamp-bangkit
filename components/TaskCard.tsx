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
import { editTask, deleteTask } from "@/actions";
import { useFormStatus } from "react-dom";
import { useState } from "react";

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
  const statusList = ["ongoing", "todo", "done", "error"];

  return (
    <>
      <div
        onClick={onOpen}
        className="w-1/6 bg-slate-50 w-full rounded-lg shadow-md min-h-[100px] p-4 hover:bg-slate-100 cursor-pointer grid transition ease-in-out"
      >
        <h2 className="text-md font-bold text-left capitalize">{task.title}</h2>
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
                  {statusList.map((status) => (
                    <SelectItem
                      value={status}
                      key={status}
                      className="capitalize"
                    >
                      {status}
                    </SelectItem>
                  ))}
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
