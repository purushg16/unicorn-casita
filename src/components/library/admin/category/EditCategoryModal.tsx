import { useState } from "react";
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
import { RText } from "../../../Utilities/Typography";
import EditModeAlert from "../editProduct/EditModeAlert";
import EnterEditButton from "../editProduct/EnterEditButton";
import ExitEditButton from "../editProduct/ExitEditButton";
import ResetButton from "../editProduct/ResetButton";
import useImageStore from "../../../store/admin/imageStore";
import LabelledInput from "../../../Utilities/LabelledInput";
import useCategoryEntryStore from "../../../store/admin/categoryEntryStore";
import ImagesPreviewGrid from "../../../Utilities/ImagesPreviewGrid";
import NewImageUploader from "../editProduct/NewImageUploader";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EditCategoryModal = ({ isOpen, onClose }: Props) => {
  const category = useCategoryEntryStore((s) => s.category)!;
  const setName = useCategoryEntryStore((s) => s.setName);
  const setImageLink = useCategoryEntryStore((s) => s.setImageLink);
  const reset = useCategoryEntryStore((s) => s.resetCategory);

  const images = useImageStore((s) => s.images);
  const clearImages = useImageStore((s) => s.clearImages);

  const [editMode, toggleEditMode] = useState<boolean>(false);

  const resetState = () => {
    reset();
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
      <ModalContent overflow="clip">
        <ModalHeader
          zIndex={99}
          color="primary.700"
          w="100%"
          bg="primary.50"
          pos="sticky"
          top={0}
        >
          <HStack justify="space-between" w="100%">
            <RText text="Category Details" weight="bold" />
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
        <ModalBody>
          <VStack gap={8} align="start">
            <LabelledInput
              label="Name"
              value={category.name}
              onTextChange={setName}
              isDisabled={!editMode}
            />
            {editMode && (
              <VStack w="100%">
                <NewImageUploader
                  limit={
                    category.imageLink === "" && images.length === 0 ? 1 : 0
                  }
                />
              </VStack>
            )}
            <ImagesPreviewGrid
              title="Image"
              images={category.imageLink !== "" ? [category.imageLink] : []}
              onDelete={() => editMode && setImageLink("")}
              viewOnly={!editMode}
            />
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
          <HStack gap={4}>
            <Button
              colorScheme="primary"
              variant="ghost"
              onClick={() => {
                onClose();
                exitEditMode();
              }}
            >
              Cancel
            </Button>
            <Button colorScheme="primary">Cancel</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditCategoryModal;
