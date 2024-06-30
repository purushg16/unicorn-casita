import {
  Button,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import useProductEntryStore, {
  stock,
} from "../../../store/admin/productEntryStore";

const StockSelector = ({ editMode }: { editMode: boolean }) => {
  const value = useProductEntryStore((s) => s.product)?.stock;
  const setValue = useProductEntryStore((s) => s.toggleStockAvaiability);

  return (
    <VStack align="start">
      <FormLabel fontSize="xs" color="primary.900" m={0}>
        Stock
      </FormLabel>
      {!editMode && (
        <Button variant="secondary" textTransform="capitalize" isDisabled>
          {value}
        </Button>
      )}
      {editMode && (
        <RadioGroup
          onChange={(e) => setValue(e as stock)}
          colorScheme="primary"
          value={value}
        >
          <Stack direction="row" gap={4}>
            <Radio value="in-stock" isDisabled={!editMode}>
              In Stock
            </Radio>
            <Radio value="sold-out" isDisabled={!editMode}>
              Out-of-Stock
            </Radio>
          </Stack>
        </RadioGroup>
      )}
    </VStack>
  );
};

export default StockSelector;
