import { GridItem, Image, Text, VStack, Heading } from "@chakra-ui/react";
import img from "../../../../../assets/bento/truck.png";

const Delivery = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={{ base: 3, md: 3, lg: 2 }}
      p={8}
      bg="#ffecef"
      border="1px solid"
      borderColor="primary.100"
      borderRadius="xl"
      overflow="clip"
      pos="relative"
    >
      <VStack align="start" flex={1} gap={4}>
        <Heading fontSize={{ base: "lg", lg: "xl" }} color="black">
          Free & Fast Shipping
        </Heading>
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          maxW="100%"
          color="#EF89D2"
          children="We offer fast & free shipping for out lovable & loyal customers."
        />
      </VStack>
      <Image
        src={img}
        alt=""
        pos="absolute"
        w={180}
        right={-5}
        bottom={-5}
        opacity={0.4}
      />
    </GridItem>
  );
};

export default Delivery;
