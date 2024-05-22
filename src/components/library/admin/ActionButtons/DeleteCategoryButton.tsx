import { Button, Icon, IconButton, useDisclosure } from "@chakra-ui/react";
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

const DeleteCategoryButton = ({ category }: { category: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const { mutate, isPending } = useDeleteCategory(onClose);

  const handleDelete = () => {
    if (category._id) mutate({ categoryId: category._id });
  };

  return (
    <>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        aria-label="edit-category"
        icon={<Icon as={Trash} />}
        size={{ base: "xs", md: "sm" }}
        variant="secondary"
      />
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
                Delete Category
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteCategoryButton;
