import {
  GridItem,
  HStack,
  Heading,
  VStack,
  Text,
  Box,
  Show,
  Image,
} from "@chakra-ui/react";
import img from "../../../../../assets/bento/tulips.png";

const Original = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={{ base: 6, md: 6, lg: 4 }}
      p={8}
      bg="#ffecef"
      border="1px solid"
      borderColor="primary.100"
      borderRadius="xl"
      overflow="clip"
      pos="relative"
    >
      <HStack w="100%" gap={12}>
        <VStack align="start" flex={1} gap={4} alignSelf="start">
          <Heading fontSize={{ base: "lg", lg: "xl" }} color="black">
            Original Products 💯
          </Heading>
          <Text
            fontSize={{ base: "sm", lg: "md" }}
            maxW="100%"
            color="#EF89D2"
            children="We provide money back guarantee if the products are not original."
          />
        </VStack>
        <Show above="md">
          <Box
            w={250}
            h={180}
            maxH={200}
            bgImg={img}
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPos="center"
          />
        </Show>

        <Show below="md">
          <Image
            src={img}
            alt=""
            pos="absolute"
            w={200}
            right={-5}
            bottom={-20}
            opacity={0.2}
          />
        </Show>
      </HStack>
    </GridItem>
  );
};

export default Original;
