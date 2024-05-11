import {
  Button,
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
import LabelledInput from "../../../Utilities/LabelledInput";
import mockProducts from "../../../mocks/mockProducts";
import useImageStore from "../../../store/admin/imageStore";
import EditModeAlert from "./EditModeAlert";
import EditProductModalHeader from "./EditProductModalHeader";
import NewImageUploader from "./NewImageUploader";
import RetriveImageButton from "./RetriveImageButton";
import TagsHug from "./TagsHug";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SingleProductModal = ({ isOpen, onClose }: Props) => {
  const product = mockProducts[0];

  const images = useImageStore((s) => s.images);
  const clearImages = useImageStore((s) => s.clearImages);

  const [name, setName] = useState<string>(product.name);
  const [price, setPrice] = useState<number>(product.price);
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const [productImages, setProductImages] = useState<string[]>(
    product.imageLink
  );

  const [tags, setTags] = useState<string[]>(product.tags || []);
  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  const removeImage = (id: string) =>
    setProductImages(productImages.filter((img) => img !== id));

  const retrieveImages = () => setProductImages(product.imageLink);

  const resetState = () => {
    setName(product.name);
    setPrice(product.price);
    setTags(product.tags || []);
    setProductImages(product.imageLink);
    clearImages();
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
        <ModalHeader color="primary.700" w="100%" bg="primary.50">
          <EditProductModalHeader
            editMode={editMode}
            enterEditMode={toggleEditMode}
            exitEditMode={exitEditMode}
            reset={resetState}
          />
          {editMode && <EditModeAlert />}
        </ModalHeader>

        <ModalBody my={4}>
          <VStack gap={6}>
            <LabelledInput
              isDisabled={!editMode}
              label="Product Name"
              value={name}
              onTextChange={setName}
            />
            <LabelledInput
              isDisabled={!editMode}
              label="Price"
              value={price}
              onNumberChange={setPrice}
              type="number"
            />

            <TagsHug tags={tags} removeTag={removeTag} editMode={editMode} />

            <VStack w="100%" align="start" color="primary.600">
              {editMode && (
                <NewImageUploader
                  limit={4 - (images.length + productImages.length)}
                />
              )}

              {productImages.length > 0 ? (
                <ImagesPreviewGrid
                  title={editMode ? "Pre-Uploaded Images" : "Images"}
                  images={productImages}
                  onDelete={editMode ? removeImage : undefined}
                  viewOnly={!editMode}
                />
              ) : (
                <RetriveImageButton onClick={retrieveImages} />
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
              toggleEditMode(false);
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
