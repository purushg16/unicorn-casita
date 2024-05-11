import {
  Box,
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BadgePlus } from "lucide-react";
import { useState } from "react";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import LabelledInput from "../../../Utilities/LabelledInput";
import TagContainer from "./TagContainer";

const AddTagModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [tag, setTag] = useState<string>("");

  const tags = useProductEntryStore((s) => s.product)?.tags;
  const addTag = useProductEntryStore((s) => s.addTag);

  return (
    <>
      <Button
        colorScheme="purple"
        size="xs"
        aria-label="Add-tag"
        leftIcon={<Icon as={BadgePlus} />}
        onClick={onOpen}
      >
        New Tag
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setTag("");
        }}
        closeOnOverlayClick={false}
        closeOnEsc={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader color="primary.700"> New Tag </ModalHeader>
          <ModalBody>
            {tags && <TagContainer editMode />}
            <Box my={4} />
            <LabelledInput label="Tag" value={tag} onTextChange={setTag} />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="primary"
              onClick={() => {
                addTag(tag);
                setTag("");
              }}
              isDisabled={!tag}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTagModal;
