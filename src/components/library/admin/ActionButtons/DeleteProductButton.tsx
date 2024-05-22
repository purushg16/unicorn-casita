import { Button, Icon, IconButton, useDisclosure } from "@chakra-ui/react";
import { Trash } from "lucide-react";
import { useDeleteProduct } from "../../../hooks/admin/useProduct";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";

const DeleteProductButton = ({ productId }: { productId: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const { mutate, isPending } = useDeleteProduct(onClose);
  return (
    <>
      <IconButton
        aria-label="edit-category"
        icon={<Icon as={Trash} />}
        size={{ base: "xs", md: "sm" }}
        variant="secondary"
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
      />
      <AlertDialog
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="red">
              Delete Product?
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                variant="ghost"
                colorScheme="red"
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                isLoading={isPending}
                onClick={() => mutate({ productId })}
                ml={4}
              >
                Delete Product
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteProductButton;
