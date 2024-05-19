import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
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
import { useState } from "react";
import LabelledInput from "../../../Utilities/LabelledInput";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import { RText } from "../../../Utilities/Typography";
import AnimateMove from "../../../motions/Move";

const AddAttributeModal = () => {
  const attributes = useProductEntryStore((s) => s.product)?.attributes;
  const addAttributes = useProductEntryStore((s) => s.addAttributes);
  const isDisabled = !useProductEntryStore((s) => s.product)?.isAttribute;
  const attributeName = useProductEntryStore((s) => s.product)?.attributeName;

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [value, setValue] = useState<string>("");
  const [salesPrice, setSalesPrice] = useState<number>(0);

  const handleCancel = () => {
    setValue("");
    setSalesPrice(0);
    onClose();
  };

  const handleAdd = () => {
    addAttributes({ value, salesPrice });
    setValue("");
    setSalesPrice(0);
  };

  return (
    <>
      <IconButton
        isDisabled={isDisabled || !attributeName}
        onClick={onOpen}
        icon={<Icon as={BadgePlus} />}
        aria-label="add-attribute"
        colorScheme="purple"
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Add Attributes </ModalHeader>
          <ModalBody mb={4}>
            <VStack gap={4}>
              <LabelledInput
                label="Value"
                placeholder={`E.x: "X-Small", "Blue"... `}
                value={value}
                onTextChange={setValue}
              />
              <LabelledInput
                label="Sales Price"
                value={salesPrice}
                onNumberChange={setSalesPrice}
                type="number"
              />
            </VStack>
          </ModalBody>
          <ModalFooter as={HStack} justifyContent="space-between" w="100%">
            <Box>
              {attributes?.map((a) => a.value).includes(value) && (
                <AnimateMove>
                  <RText text="Value Already exists" small color="red" />
                </AnimateMove>
              )}
            </Box>

            <HStack>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleAdd}
                isDisabled={
                  !value ||
                  !salesPrice ||
                  attributes?.map((a) => a.value).includes(value)
                }
              >
                Add
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddAttributeModal;
