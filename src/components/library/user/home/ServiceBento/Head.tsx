import { GridItem, HStack, Heading, Image } from "@chakra-ui/react";
import img from "../../../../../assets/logo.png";

const Head = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={6}
      p={4}
      bg="#ffecef"
      border="1px solid"
      borderColor="primary.100"
      borderRadius={10}
    >
      <HStack w="100%" gap={4}>
        <Image src={img} alt="logo" boxSize={8} />
        <Heading
          fontSize={{ base: "sm", lg: "md" }}
          fontWeight={600}
          color="black"
        >
          The excellent hub of beautiful products
        </Heading>
      </HStack>
    </GridItem>
  );
};

export default Head;
