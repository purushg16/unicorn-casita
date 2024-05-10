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
import LabelledInput from "../../../Utilities/LabelledInput";
import { RText } from "../../../Utilities/Typography";
import EditModeAlert from "./EditModeAlert";
import EnterEditButton from "./EnterEditButton";
import ExitEditButton from "./ExitEditButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SingleProductModal = ({ isOpen, onClose }: Props) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [editMode, toggleEditMode] = useState<boolean>(false);

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
        <ModalHeader color="primary.700" w="100%" bg="primary.50">
          <HStack justify="space-between" w="100%">
            <RText text="Product Details" weight="bold" />
            {!editMode && <EnterEditButton onClick={toggleEditMode} />}
            {editMode && <ExitEditButton onClick={toggleEditMode} />}
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
          </VStack>
        </ModalBody>
        <ModalFooter mt={4}>
          <Button
            colorScheme="primary"
            variant="ghost"
            onClick={() => {
              onClose();
              toggleEditMode(false);
            }}
            mr={4}
          >
            Cancel
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
