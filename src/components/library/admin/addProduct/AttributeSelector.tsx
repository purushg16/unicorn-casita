import { Checkbox, FormLabel, VStack } from "@chakra-ui/react";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import AttributesStack from "../Attributes/AttributesStack";
import VariantsMenu from "./VariantsMenu";
import ProductSalesPriceInput from "../editProduct/ProductSalesPriceInput";

const AttributeSelector = () => {
  const hasVariant = useProductEntryStore((s) => s.product)?.isAttribute;
  const toggleVariant = useProductEntryStore((s) => s.toggleAttribute);

  return (
    <VStack
      align="start"
      w="100%"
      borderRadius={15}
      bg="purple.50"
      p={4}
      gap={4}
    >
      <FormLabel m={0} fontSize="xs" color="primary.800">
        Variant
      </FormLabel>
      <Checkbox
        colorScheme="primary"
        ml={1}
        mb={4}
        isChecked={hasVariant}
        onChange={toggleVariant}
      >
        Does this product has different variant and different pricing for each
        variants?
      </Checkbox>
      {hasVariant ? (
        <VStack align="start" w="100%">
          <VariantsMenu />
          <AttributesStack />
        </VStack>
      ) : (
        <ProductSalesPriceInput editMode />
      )}
    </VStack>
  );
};

export default AttributeSelector;
