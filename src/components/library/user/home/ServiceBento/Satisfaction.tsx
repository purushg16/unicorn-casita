import { GridItem, Heading, VStack, Text, Image } from "@chakra-ui/react";
import img from "../../../../../assets/bento/heart.png";

const Satisfaction = () => {
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
          Satisfaction
        </Heading>
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          maxW="100%"
          color="#EF89D2"
          children="Exchange the product you’ve purchased if does not fit on you."
        />
      </VStack>
      <Image
        src={img}
        alt=""
        pos="absolute"
        w={150}
        right={-5}
        bottom={-5}
        opacity={0.2}
      />
    </GridItem>
  );
};

export default Satisfaction;
