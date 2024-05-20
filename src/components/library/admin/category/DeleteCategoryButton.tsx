import { Button, Icon, useDisclosure } from "@chakra-ui/react";
import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";
import Category from "../../../entities/category";
import { useDeleteCategory } from "../../../hooks/admin/useCategory";

const DeleteCategoryButton = ({
  category,
  closeModal,
}: {
  category: Category;
  closeModal: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const onDelete = () => {
    onClose();
    closeModal();
  };

  const { mutate, isPending } = useDeleteCategory(onDelete);

  const handleDelete = () => {
    if (category._id) mutate({ categoryId: category._id });
  };

  return (
    <>
      <Button
        colorScheme="red"
        leftIcon={<Icon as={Trash} />}
        onClick={onOpen}
        size="sm"
      >
        Delete
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="red">
              Delete Category
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                colorScheme="red"
                variant="ghost"
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDelete}
                ml={4}
                isLoading={isPending}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteCategoryButton;
