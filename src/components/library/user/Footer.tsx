import { Box, Divider, SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../Utilities/Typography";

const Footer = () => {
  return (
    <Box px={{ base: 6, md: 10, lg: 16 }} py={8} bg="primary.200">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <VStack align="start" h="100%" w="70%">
          <RHeading small text="Unicorn" />
          <RText
            small
            text="Specialises in providing high quality & stylish products for you wardrobe"
          />
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} h="100%">
          <VStack align="start">
            <RText text="lorem ipsum" weight="bolder" />
            <RText text="lorem ipsum" small />
            <RText text="lorem ipsum" small />
            <RText text="lorem ipsum" small />
          </VStack>

          <VStack align="start">
            <RText text="lorem ipsum" weight="bolder" />

            <RText text="lorem ipsum" small />
            <RText text="lorem ipsum" small />
            <RText text="lorem ipsum" small />
          </VStack>

          <VStack align="start">
            <RText text="lorem ipsum" weight="bolder" />

            <RText text="lorem ipsum" small />
            <RText text="lorem ipsum" small />
            <RText text="lorem ipsum" small />
          </VStack>
        </SimpleGrid>
      </SimpleGrid>

      <Divider my={8} />
      <Box textAlign="center">
        <RText text="Copyrights @2024 Unicorn. All rights reserved" small />
      </Box>
    </Box>
  );
};

export default Footer;
