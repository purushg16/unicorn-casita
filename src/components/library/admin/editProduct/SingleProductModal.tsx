import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ImagesPreviewGrid from "../../../Utilities/ImagesPreviewGrid";
import useImageStore from "../../../store/admin/imageStore";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import EditModeAlert from "./EditModeAlert";
import NewImageUploader from "./NewImageUploader";
import ProductNameInput from "./ProductNameInput";
import ProductPriceInput from "./ProductPriceInput";
import RetriveImageButton from "./RetriveImageButton";
import TagsHug from "./TagsHug";
import { RText } from "../../../Utilities/Typography";
import EnterEditButton from "./EnterEditButton";
import ExitEditButton from "./ExitEditButton";
import ResetButton from "./ResetButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SingleProductModal = ({ isOpen, onClose }: Props) => {
  const product = useProductEntryStore((s) => s.product)!;
  const resetEntry = useProductEntryStore((s) => s.resetEntry);
  const removeImage = useProductEntryStore((s) => s.removeImage);

  const images = useImageStore((s) => s.images);
  const clearImages = useImageStore((s) => s.clearImages);

  const [editMode, toggleEditMode] = useState<boolean>(false);

  const resetState = () => {
    clearImages();
    resetEntry();
  };

  const exitEditMode = () => {
    toggleEditMode(false);
    resetState();
  };

  return (
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
          zIndex={99}
          color="primary.700"
          w="100%"
          bg="primary.50"
          pos="sticky"
          top={0}
        >
          <HStack justify="space-between" w="100%">
            <RText text="Product Details" weight="bold" />
            {!editMode && <EnterEditButton onClick={toggleEditMode} />}
            {editMode && (
              <HStack>
                <ResetButton reset={resetState} />
                <ExitEditButton onClick={exitEditMode} />
              </HStack>
            )}
          </HStack>

          {editMode && <EditModeAlert />}
        </ModalHeader>

        <ModalBody my={4}>
          <VStack gap={6}>
            <ProductNameInput editMode={editMode} />
            <ProductPriceInput editMode={editMode} />
            <TagsHug editMode={editMode} />

            <VStack w="100%" align="start" color="primary.600">
              {editMode && (
                <NewImageUploader
                  limit={4 - (images.length + product.imageLink.length)}
                />
              )}

              {product.imageLink.length > 0 ? (
                <ImagesPreviewGrid
                  title={editMode ? "Pre-Uploaded Images" : "Images"}
                  images={product.imageLink}
                  onDelete={editMode ? removeImage : undefined}
                  viewOnly={!editMode}
                />
              ) : (
                <RetriveImageButton />
              )}
            </VStack>
          </VStack>
        </ModalBody>

        <ModalFooter
          mt={4}
          pos="sticky"
          bottom={0}
          pt={4}
          bg="primary.50"
          borderTop="1px solid"
          borderColor="primary.200"
        >
          <Button
            colorScheme="primary"
            variant="ghost"
            onClick={() => {
              onClose();
              exitEditMode();
            }}
            mr={4}
            isDisabled={editMode}
            title={editMode ? "Exit edit mode to close." : ""}
          >
            Close
          </Button>
          <Button colorScheme="primary" isDisabled={!editMode}>
            Update Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SingleProductModal;
