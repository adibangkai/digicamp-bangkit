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

export default function TaskCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="w-1/6 bg-slate-50 w-full rounded-lg shadow-lg min-h-[100px] p-4 hover:bg-slate-100 cursor-pointer grid"
      >
        <h2 className="text-md font-bold text-left">Title Task</h2>
        <p className="text-sm font-light truncate">
          ini tugas pertamaku Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Autem in corrupti ex placeat, nisi adipisci facilis consectetur,
          maxime, esse cupiditate soluta beatae assumenda unde aut dolorum
          exercitationem dicta! Accusamus, beatae?
        </p>
        <p className="text-sm text-right mt-4 done font-semibold">status</p>
      </Button>{" "}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Title Task
              </ModalHeader>
              <ModalBody>
                <Textarea
                  name="description"
                  placeholder="describe your task"
                  value={
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
                  }
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
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
