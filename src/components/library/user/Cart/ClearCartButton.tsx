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
import { Trash2 } from "lucide-react";
import { useRef } from "react";
import useUserCartStore from "../../../store/user/useCartStore";

const ClearCartButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const clearCart = useUserCartStore((s) => s.clearCart);

  return (
    <>
      <Button
        variant="text"
        colorScheme="red"
        color="red.400"
        leftIcon={<Icon as={Trash2} />}
        onClick={onOpen}
        size={{ base: "sm", md: "md" }}
      >
        Clear
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
              Clear Cart
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
                onClick={() => {
                  clearCart();
                  onClose();
                }}
                ml={4}
              >
                Clear Cart
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ClearCartButton;
