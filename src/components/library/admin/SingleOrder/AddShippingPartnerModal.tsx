import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { RHeading } from "../../../Utilities/Typography";
import { useState } from "react";
import { useAddDeliveryPartner } from "../../../hooks/admin/useDeliveryPartner";
import { DeliveryPartner } from "../../../entities/deliveryPartner";
import LabelledInput from "../../../Utilities/LabelledInput";
import { BadgePlus, Truck } from "lucide-react";
import AnimateMove from "../../../motions/Move";

const AddShippingPartnerModal = ({ appbar = false }: { appbar?: boolean }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [partnerDetails, setPartnerDetails] = useState<DeliveryPartner>({
    serviceProvider: "",
    link: "",
  });

  const clearState = () => {
    setPartnerDetails({
      serviceProvider: "",
      link: "",
    });
  };

  const { mutate: addPartner, isPending } = useAddDeliveryPartner(clearState);

  return (
    <>
      {appbar ? (
        <AnimateMove delay={0.6}>
          <Button
            color="primary.700"
            variant="text"
            leftIcon={<Icon as={Truck} />}
            justifyContent="start"
            textTransform="capitalize"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            New Delivery Partner
          </Button>
        </AnimateMove>
      ) : (
        <Button
          onClick={onOpen}
          variant="primary"
          size="xs"
          leftIcon={<Icon as={BadgePlus} />}
        >
          New Delivery Partner
        </Button>
      )}
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <VStack align="start">
              <RHeading small text="Add Delivery Partner" color="primary.800" />
            </VStack>
          </ModalHeader>
          <ModalBody my={4}>
            <VStack gap={6} w="100%">
              <LabelledInput
                label="Partner's Name"
                value={partnerDetails.serviceProvider}
                onTextChange={(value) =>
                  setPartnerDetails({
                    ...partnerDetails,
                    serviceProvider: value,
                  })
                }
              />
              <LabelledInput
                label="Partner's Link"
                value={partnerDetails.link}
                onTextChange={(value) =>
                  setPartnerDetails({ ...partnerDetails, link: value })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter pos="sticky" bottom={0} bg="primary.100">
            <Button onClick={onClose} variant="white">
              Close
            </Button>
            <Button
              ml={4}
              onClick={() => addPartner(partnerDetails)}
              variant="primary"
              isLoading={isPending}
              isDisabled={
                !partnerDetails.serviceProvider || !partnerDetails.link
              }
            >
              Add Partner
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddShippingPartnerModal;
