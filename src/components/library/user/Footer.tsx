import { Box, Divider, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../Utilities/Typography";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      px={{ base: 6, md: 10, lg: 16 }}
      py={8}
      bg="primary.100"
      color="primary.700"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <VStack align="start" h="100%" w="70%">
          <RHeading text="Unicorn Casita" />
          <RText text="Specialises in providing high quality & stylish products for you wardrobe" />
        </VStack>

        <HStack w="100%" flexWrap="wrap" justify="space-between" spacing={20}>
          <VStack align="start">
            <RText text="Brand" weight="bolder" small />
            <RText text="New Arrivals" small />
            <RText text="Categories" small />
            <RText text="Collections" small />
          </VStack>

          <VStack align="start">
            <RText text="Customer Policies" weight="bolder" small />
            <Link to="/termsandcondtions">
              <RText text="Terms & Conditions" small />
            </Link>
            <Link to="/shippinganddeliverypolicy">
              <RText text="Shipping & Delivery" small />
            </Link>
            <Link to="/cancellationorrefundpolicy">
              <RText text="Cancellation or Refund policy" small />
            </Link>
          </VStack>

          <VStack align="start">
            <RText text="lorem ipsum" weight="bolder" small />

            <RText text="lorem ipsum" small />
            <RText text="lorem ipsum" small />
            <RText text="lorem ipsum" small />
          </VStack>
        </HStack>
      </SimpleGrid>

      <Divider my={8} />
      <Box textAlign="center">
        <RText text="Copyrights @2024 Unicorn. All rights reserved" small />
      </Box>
    </Box>
  );
};

export default Footer;
