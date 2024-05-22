import { FormLabel, Textarea, VStack } from "@chakra-ui/react";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const DescriptionInput = ({ editMode }: { editMode: boolean }) => {
  const description = useProductEntryStore((s) => s.product)?.description;
  const setDescription = useProductEntryStore((s) => s.setDescription);

  return (
    <VStack gap={0} align="start" w="100%">
      <FormLabel fontSize="xs" color="primary.800">
        Product Description
      </FormLabel>
      <Textarea
        isDisabled={!editMode}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        borderRadius="xl"
        bg="primary.100"
        color="primary.800"
        _hover={{ borderColor: "primary.200" }}
        _focus={{ borderColor: "primary.200" }}
        _active={{ borderColor: "primary.200" }}
        _placeholder={{ color: "primary.400" }}
        variant="filled"
        placeholder="Description"
      />
    </VStack>
  );
};

export default DescriptionInput;
