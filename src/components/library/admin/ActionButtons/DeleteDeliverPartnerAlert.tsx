import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  IconButton,
  Button,
  Icon,
} from "@chakra-ui/react";
import { useRef } from "react";
import { DeliveryPartner } from "../../../entities/deliveryPartner";
import { Trash } from "lucide-react";
import { useDeleteDeliveryPartner } from "../../../hooks/admin/useDeliveryPartner";

const DeleteDeliverPartnerAlert = ({
  partner,
}: {
  partner: DeliveryPartner;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const { mutate, isPending } = useDeleteDeliveryPartner(onClose);

  return (
    <>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        size="sm"
        bg="red.200"
        _hover={{ bg: "red.300" }}
        _active={{ bg: "red.300" }}
        _focus={{ bg: "red.300" }}
        aria-label="del-partner"
        icon={<Icon as={Trash} />}
      />

      <AlertDialog
        isCentered
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="red">
              Delete Delivery Partner
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                variant="ghost"
                colorScheme="red"
                ref={cancelRef}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                isLoading={isPending}
                colorScheme="red"
                onClick={() => mutate({ courierId: partner._id || "" })}
                ml={3}
              >
                Delete Partner
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteDeliverPartnerAlert;
