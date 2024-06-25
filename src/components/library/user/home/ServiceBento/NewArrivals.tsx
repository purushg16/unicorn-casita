import {
  GridItem,
  HStack,
  Heading,
  VStack,
  Text,
  Box,
  Image,
  Show,
} from "@chakra-ui/react";
import img from "../../../../../assets/bento/new.png";

const NewArrivals = () => {
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
            New Arrivals ✨
          </Heading>
          <Text
            fontSize={{ base: "sm", lg: "md" }}
            maxW="100%"
            color="#EF89D2"
            children="We update our collections almost single everyday with curation."
          />
        </VStack>
        <Show above="md">
          <Box
            w={300}
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
            bottom={-5}
            opacity={0.2}
          />
        </Show>
      </HStack>
    </GridItem>
  );
};

export default NewArrivals;
