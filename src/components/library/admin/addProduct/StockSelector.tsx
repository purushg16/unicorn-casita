import { FormLabel, Radio, RadioGroup, Stack, VStack } from "@chakra-ui/react";
import { useState } from "react";

const StockSelector = () => {
  const [value, setValue] = useState("in-stock");

  return (
    <VStack align="start">
      <FormLabel fontSize="xs" color="primary.900" m={0}>
        Stock
      </FormLabel>
      <RadioGroup onChange={setValue} colorScheme="primary" value={value}>
        <Stack direction="row" gap={4}>
          <Radio value="in-stock"> In Stock </Radio>
          <Radio value="sold-out"> Out-of-Stock </Radio>
        </Stack>
      </RadioGroup>
    </VStack>
  );
};

export default StockSelector;
