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
import { useAddCategory } from "../../../hooks/admin/useCategory";
import cloudinaryUpload from "../../../functions/cloudinaryUpload";

const AddCategoryModal = () => {
  const [name, setName] = useState<string>("");
  const [pickup, setPickup] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const images = useImageStore((s) => s.images);
  const clearImages = useImageStore((s) => s.clearImages);

  const handleClose = () => {
    setName("");
    setPickup("");
    onClose();
    clearImages();
    setLoading(false);
  };

  const { mutate } = useAddCategory(handleClose);

  const handleSubmit = () => {
    setLoading(true);
    cloudinaryUpload(images.map((img) => img.image)).then((res) =>
      mutate({
        name,
        pickup,
        imageLink: res[0]?.secure_url || "",
      })
    );
  };

  return (
    <>
      <Button
        zIndex={999}
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
                value={name}
                onTextChange={setName}
              />
              <LabelledInput
                label="Pick Up Line"
                value={pickup}
                onTextChange={setPickup}
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
            <Button
              variant="primary"
              isDisabled={!name}
              onClick={handleSubmit}
              isLoading={isLoading}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCategoryModal;
