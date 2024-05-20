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
import CategoriesSelectionList from "./CategoriesSelectionList";
import useCategorySelectorStore from "../../../store/admin/categorySelectorStore";

const CategorySelector = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const selectedCategory = useCategorySelectorStore((s) => s.category);

  return (
    <VStack align="start" gap={0}>
      <FormLabel fontSize="xs" color="primary.800">
        Category
      </FormLabel>
      <Button onClick={onOpen} variant="secondary">
        Select Category
      </Button>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        closeOnEsc={false}
        size={{ base: "full", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="primary.800"> Select Category </ModalHeader>
          <ModalBody>
            <CategoriesSelectionList />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="primary"
              variant="ghost"
              onClick={onClose}
              mr={4}
            >
              Close
            </Button>
            <Button
              variant="primary"
              isDisabled={!selectedCategory}
              onClick={onClose}
            >
              Select
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default CategorySelector;
