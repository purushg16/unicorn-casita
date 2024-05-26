import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React from "react";
import { useAdminConfirmOrder } from "../../../hooks/admin/useOrder";

const ConfirmOrderModal = ({
  orderId,
  isDisabled,
}: {
  orderId: string;
  isDisabled: boolean;
}) => {
  const { mutate, isPending } = useAdminConfirmOrder();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  return (
    <>
      <Button
        variant="primary"
        size="sm"
        onClick={onOpen}
        isDisabled={isDisabled}
      >
        Confirm Order
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent borderRadius={0}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Order
            </AlertDialogHeader>

            <AlertDialogBody>
              Please click "Cofirm Order" to confirm the order.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} mr={4}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  mutate({ mongooseOrderId: orderId });
                }}
                isLoading={isPending}
              >
                Confirm Order
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ConfirmOrderModal;
