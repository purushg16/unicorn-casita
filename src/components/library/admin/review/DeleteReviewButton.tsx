import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { Trash } from "lucide-react";
import { useRef } from "react";
import { useDeleteReview } from "../../../hooks/admin/useAdminReview";

const DeleteReviewButton = ({ reviewId }: { reviewId: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const { mutate, isPending } = useDeleteReview(onClose);
  return (
    <>
      <Button
        onClick={onOpen}
        w="100%"
        variant="secondary"
        leftIcon={<Icon as={Trash} />}
        borderRadius={0}
      >
        Delete
      </Button>
      <AlertDialog
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold" color="red">
            Delete Review?
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to delete this review? There is no reversing
            the action.
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
              ml={4}
              onClick={() => mutate({ reviewId })}
              isLoading={isPending}
            >
              Delete Review
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteReviewButton;
