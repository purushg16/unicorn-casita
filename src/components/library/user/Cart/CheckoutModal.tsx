import {
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
import { RHeading, RText } from "../../../Utilities/Typography";
import LabelledInput from "../../../Utilities/LabelledInput";
import useUserCartStore from "../../../store/user/useCartStore";
import CheckoutButton from "./CheckoutButton";

const CheckoutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const products = useUserCartStore((s) => s.products);
  const customerName = useUserCartStore((s) => s.customerName);
  const setCustomerName = useUserCartStore((s) => s.setCustomerName);
  const address = useUserCartStore((s) => s.address);
  const setAddress = useUserCartStore((s) => s.setAddress);
  const district = useUserCartStore((s) => s.district);
  const setDistrict = useUserCartStore((s) => s.setDistrict);
  const state = useUserCartStore((s) => s.state);
  const setState = useUserCartStore((s) => s.setState);
  const pincode = useUserCartStore((s) => s.pincode);
  const setPincode = useUserCartStore((s) => s.setPincode);
  const contact = useUserCartStore((s) => s.contact);
  const setContact = useUserCartStore((s) => s.setContact);
  const email = useUserCartStore((s) => s.email);
  const setEmail = useUserCartStore((s) => s.setEmail);

  const isDisabled = (): boolean => {
    return (
      products.length === 0 ||
      products.some((prod) => Number.isNaN(prod.quantity)) ||
      products.some((prod) => prod.quantity === 0) ||
      products.some((prod) => prod.quantity === null)
    );
  };

  return (
    <>
      <Button
        w="100%"
        variant="primary"
        onClick={() => !isDisabled() && onOpen()}
        isDisabled={isDisabled()}
      >
        Checkout Now
      </Button>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        size={{ base: "full", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent pos="relative">
          <ModalHeader>
            <VStack align="start" gap={0}>
              <RHeading small text="Checkout Cart" color="primary.800" />
              <RText
                small
                text="Enter details to complete order"
                color="primary.800"
              />
            </VStack>
          </ModalHeader>
          <ModalBody>
            <VStack gap={4} maxH={{ base: "100%", md: 400 }} overflowY="scroll">
              <LabelledInput
                label="Customer Name"
                value={customerName}
                onTextChange={setCustomerName}
              />
              <LabelledInput
                label="Address"
                value={address}
                onTextChange={setAddress}
              />
              <LabelledInput
                label="District"
                value={district}
                onTextChange={setDistrict}
              />
              <LabelledInput
                label="State"
                value={state}
                onTextChange={setState}
              />
              <LabelledInput
                label="Pincode"
                type="number"
                value={pincode}
                onNumberChange={setPincode}
              />
              <LabelledInput
                label="Contact"
                type="number"
                value={contact}
                onNumberChange={setContact}
              />
              <LabelledInput
                label="Email"
                value={email}
                onTextChange={setEmail}
              />
            </VStack>
          </ModalBody>
          <ModalFooter pos="sticky" bottom={0} bg="primary.100">
            <Button variant="secondary" mr={4} onClick={onClose}>
              Back
            </Button>
            <CheckoutButton />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckoutModal;
