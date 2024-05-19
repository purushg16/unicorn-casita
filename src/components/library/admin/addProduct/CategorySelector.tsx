import {
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

const CategorySelector = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <VStack align="start" gap={0}>
      <FormLabel fontSize="xs" color="primary.800">
        Category
      </FormLabel>
      <Button onClick={onOpen} variant="secondary">
        Select Category
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        // closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default CategorySelector;
