import {
  Checkbox,
  CheckboxGroup,
  FormLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const OptionsStack = ({ editMode }: { editMode: boolean }) => {
  const wholesale = useProductEntryStore((s) => s.product)?.wholesale;
  const setWholesale = useProductEntryStore((s) => s.setWholesale);

  const bestSeller = useProductEntryStore((s) => s.product)?.bestSeller;
  const setBestSeller = useProductEntryStore((s) => s.setBestSeller);

  return (
    <VStack align="start" w="100%">
      <FormLabel fontSize="xs" color="primary.900">
        Buying Options
      </FormLabel>
      <HStack>
        <CheckboxGroup isDisabled={!editMode}>
          <Checkbox
            colorScheme="primary"
            mr={4}
            isChecked={bestSeller}
            onChange={() => setBestSeller(!bestSeller)}
          >
            Best Seller
          </Checkbox>
          <Checkbox
            colorScheme="primary"
            isChecked={wholesale}
            onChange={() => setWholesale(!wholesale)}
          >
            Wholesale
          </Checkbox>
        </CheckboxGroup>
      </HStack>
    </VStack>
  );
};

export default OptionsStack;
