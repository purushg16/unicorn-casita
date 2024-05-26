import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import LabelledInput from "../../../Utilities/LabelledInput";
import { RHeading } from "../../../Utilities/Typography";
import { Order } from "../../../entities/order";
import {
  AdminShipOrder,
  useAdminShipOrder,
} from "../../../hooks/admin/useOrder";
import AddShippingPartnerModal from "./AddShippingPartnerModal";
import DeliverPartnersStack from "./DeliverPartnersStack";
import ShippedTag from "./ShippingTag";

const AssignShippingPartnerModal = ({ order }: { order: Order }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [shippingDetails, setShippingDetails] = useState<AdminShipOrder>({
    mongooseOrderId: order._id || "",
    shippingProviderId: "",
    trackingNumber: "",
  });

  const clearState = () => {
    setShippingDetails({
      mongooseOrderId: order._id || "",
      shippingProviderId: "",
      trackingNumber: "",
    });
    onClose();
  };

  const { mutate: performShipping, isPending } = useAdminShipOrder(clearState);

  return (
    <>
      <Box
        onClick={() => order.shippingStatus === "unshipped" && onOpen()}
        textDecor="underline"
        textDecorationColor={order.shippingProvider ? "green" : "red"}
      >
        <ShippedTag
          success={order.shippingStatus === "shipped"}
          partnerName={order.shippingProvider}
        />
      </Box>
      <Modal
        size={{ base: "full", md: "xl" }}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="primary.800">
            <VStack align="start">
              <RHeading small text="Select Delivery Partner" />
              <AddShippingPartnerModal />
            </VStack>
          </ModalHeader>
          <ModalBody my={4}>
            <VStack gap={8} w="100%">
              <LabelledInput
                label="Tracking Number"
                value={shippingDetails.trackingNumber}
                onTextChange={(value) =>
                  setShippingDetails({
                    ...shippingDetails,
                    trackingNumber: value,
                  })
                }
              />
              <DeliverPartnersStack
                selectedPartner={shippingDetails}
                seletPartner={(shippingProvider) =>
                  setShippingDetails({
                    ...shippingDetails,
                    shippingProviderId: shippingProvider,
                  })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter pos="sticky" bottom={0} bg="primary.100">
            <Button
              onClick={onClose}
              variant="ghost"
              colorScheme="primary"
              mr={4}
            >
              Cancel
            </Button>
            <Button
              onClick={() => performShipping(shippingDetails)}
              variant="primary"
              isLoading={isPending}
              isDisabled={
                !shippingDetails.mongooseOrderId ||
                !shippingDetails.shippingProviderId ||
                !shippingDetails.trackingNumber
              }
            >
              Initiate Shipping
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignShippingPartnerModal;
