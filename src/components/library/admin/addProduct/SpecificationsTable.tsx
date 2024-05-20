import {
  Button,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Show,
  VStack,
} from "@chakra-ui/react";
import { PlusCircle } from "lucide-react";
import SpecificationsField from "./SpecificationsField";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const SpecificationsTable = () => {
  const addSpecifications = useProductEntryStore((s) => s.addSpecifications);

  return (
    <VStack
      gap={2}
      align="start"
      w="100%"
      maxW="100%"
      bg="purple.50"
      p={4}
      borderRadius={20}
    >
      <HStack justify="space-between" w="100%">
        <FormLabel fontSize="xs" color="primary.800" fontWeight={700}>
          Specifications
        </FormLabel>
        <Show above="md">
          <Button
            variant="secondary"
            size="xs"
            leftIcon={<Icon as={PlusCircle} />}
            onClick={addSpecifications}
          >
            Add New Specification
          </Button>
        </Show>
        <Show below="md">
          <IconButton
            aria-label="add-spec"
            variant="primary"
            size="xs"
            icon={<Icon as={PlusCircle} />}
            onClick={addSpecifications}
          />
        </Show>
      </HStack>

      <SpecificationsField />
    </VStack>
  );
};

export default SpecificationsTable;
