import {
  Button,
  FormLabel,
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
import LabelledInput from "../../../Utilities/LabelledInput";
import { RText } from "../../../Utilities/Typography";
import EditModeAlert from "./EditModeAlert";
import EnterEditButton from "./EnterEditButton";
import ExitEditButton from "./ExitEditButton";
import ImageUploader from "../../../Utilities/ImageUploader";
import ImagesPreviewGrid from "../../../Utilities/ImagesPreviewGrid";
import mockProducts from "../../../mocks/mockProducts";
import useImageStore from "../../../store/admin/imageStore";
import ResetButton from "./ResetButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SingleProductModal = ({ isOpen, onClose }: Props) => {
  const product = mockProducts[0];

  const [name, setName] = useState<string>(product.name);
  const [price, setPrice] = useState<number>(product.price);
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const [productImages, setProductImages] = useState<string[]>(
    product.imageLink
  );

  const removeImage = (id: string) =>
    setProductImages(productImages.filter((img) => img !== id));

  const images = useImageStore((s) => s.images);
  const deleteImage = useImageStore((s) => s.deleteImage);

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
        maxH={{ base: "100%", md: "100%", lg: 700 }}
      >
        <ModalHeader color="primary.700" w="100%" bg="primary.50">
          <HStack justify="space-between" w="100%">
            <RText text="Product Details" weight="bold" />
            {!editMode && <EnterEditButton onClick={toggleEditMode} />}
            {editMode && (
              <HStack>
                <ResetButton onClick={() => {}} />
                <ExitEditButton onClick={toggleEditMode} />
              </HStack>
            )}
          </HStack>
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
            {editMode && (
              <VStack w="100%" align="start" color="primary.600">
                <ImageUploader
                  limit={4 - (images.length + productImages.length)}
                  title="Upload Images"
                  isDisabled={!editMode}
                />
                <ImagesPreviewGrid
                  images={images}
                  viewOnly={false}
                  onDelete={deleteImage}
                />
                {productImages.length > 0 && (
                  <VStack w="100%" align="start" color="primary.600" mt={4}>
                    <FormLabel m={0}> Pre-Uploaded Images </FormLabel>
                    <ImagesPreviewGrid
                      images={productImages}
                      onDelete={removeImage}
                      viewOnly={false}
                    />
                  </VStack>
                )}
              </VStack>
            )}

            {!editMode && (
              <VStack w="100%" align="start" color="primary.600">
                <FormLabel m={0}> Images </FormLabel>
                <ImagesPreviewGrid images={productImages} viewOnly />
              </VStack>
            )}
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
