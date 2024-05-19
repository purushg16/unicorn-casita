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
import useProductEntryStore from "../../../store/admin/productEntryStore";
import ProductNameInput from "../editProduct/ProductNameInput";
import ProductPriceInput from "../editProduct/ProductPriceInput";
import TagsHug from "../editProduct/TagsHug";
import NewImageUploader from "../editProduct/NewImageUploader";
import useImageStore from "../../../store/admin/imageStore";

const AddProductModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const appendNewEntry = useProductEntryStore((s) => s.appendNewEntry);
  const clearEntry = useProductEntryStore((s) => s.clearEntry);
  const images = useImageStore((s) => s.images);
  const clearImages = useImageStore((s) => s.clearImages);

  const handleOpen = () => {
    appendNewEntry({
      name: "",
      categoryId: "",
      imageLink: [],
      mrp: 0,
      specifications: "",
      tags: [],
    });
    onOpen();
  };

  const handleClose = () => {
    clearEntry();
    onClose();
    clearImages();
  };

  return (
    <>
      <Button
        id="new-product-btn"
        onClick={handleOpen}
        size="sm"
        variant="primary"
        leftIcon={<Icon as={BadgePlus} />}
      >
        New Product
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
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
            Add New Product
          </ModalHeader>
          <ModalBody my={4}>
            <VStack gap={8}>
              <ProductNameInput editMode />
              <ProductPriceInput editMode />
              <TagsHug editMode />
              <NewImageUploader limit={4 - images.length} />
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
            <Button variant="primary"> Submit </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProductModal;
