import { HStack, Icon, VStack } from "@chakra-ui/react";
import { Label, RHeading } from "../../../Utilities/Typography";
import { StarIcon } from "lucide-react";

const ProductHeader = () => {
  return (
    <VStack
      w="100%"
      align="start"
      gap={2}
      pb={4}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <RHeading small text="Product Name" />
      <HStack mb={4}>
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Label text="(4.9)" />
      </HStack>
      <RHeading small text="Rs.2000" />
    </VStack>
  );
};

export default ProductHeader;
