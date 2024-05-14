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
import { BadgePlus } from "lucide-react";
import NewImageUploader from "../editProduct/NewImageUploader";
import LabelledInput from "../../../Utilities/LabelledInput";
import { useState } from "react";
import useImageStore from "../../../store/admin/imageStore";

const AddCategoryModal = () => {
  const [category, setCategory] = useState<string>("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const clearImages = useImageStore((s) => s.clearImages);

  const handleClose = () => {
    onClose();
    clearImages();
  };

  return (
    <>
      <Button
        id="new-category-btn"
        onClick={onOpen}
        size="sm"
        variant="primary"
        leftIcon={<Icon as={BadgePlus} />}
      >
        New Category
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        isCentered
        size={{ base: "full", md: "full", lg: "xl" }}
      >
        <ModalOverlay />
        <ModalContent
          overflowY="auto"
          maxH={{ base: "100%", md: "100%", lg: 500 }}
        >
          <ModalHeader
            color="primary.700"
            zIndex={99}
            bg="primary.50"
            pos="sticky"
            top={0}
          >
            Add New Category
          </ModalHeader>
          <ModalBody my={4}>
            <VStack gap={8}>
              <LabelledInput
                label="Category"
                value={category}
                onTextChange={setCategory}
              />
              <NewImageUploader limit={1} />
            </VStack>
          </ModalBody>
          <ModalFooter
            pos="sticky"
            bottom={0}
            bg="primary.50"
            borderTop="1px solid"
            borderColor="primary.200"
          >
            <Button
              variant="ghost"
              mr={4}
              colorScheme="primary"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button colorScheme="primary"> Submit </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCategoryModal;
