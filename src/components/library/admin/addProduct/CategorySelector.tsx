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
import useProductEntryStore from "../../../store/admin/productEntryStore";
import Category from "../../../entities/category";

const CategorySelector = ({
  category,
  editMode,
}: {
  editMode: boolean;
  category?: Category;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const selectedCategory = useCategorySelectorStore((s) => s.category);

  const setCategory = useProductEntryStore((s) => s.setCategory);

  const handleClick = () => {
    if (selectedCategory?._id) {
      setCategory(selectedCategory._id);
      onClose();
    }
  };

  return (
    <VStack align="start" gap={0}>
      <FormLabel fontSize="xs" color="primary.800">
        Category
      </FormLabel>
      <Button
        isDisabled={!editMode}
        onClick={() => editMode && onOpen()}
        variant="secondary"
        minW={150}
        textTransform="capitalize"
      >
        {selectedCategory
          ? selectedCategory.name
          : category
          ? category.name
          : "Select Category"}
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
              variant="primary"
              isDisabled={!selectedCategory}
              onClick={handleClick}
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
