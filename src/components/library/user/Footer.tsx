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
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={8}>
        <VStack align="start" h="100%" w="70%">
          <RHeading text="Unicorn Casita" />
          <RText text="Specialises in providing high quality & stylish products for you wardrobe" />
        </VStack>

        <SimpleGrid w="100%" columns={{ base: 1, md: 1, lg: 3 }} spacingY={8}>
          <VStack align="start">
            <RText text="Useful Links" weight="bolder" small />
            <RText text="New Arrivals" small />
            <RText text="Categories" small />
            <RText text="Collections" small />
          </VStack>

          <VStack align="start">
            <RText text="Brand" weight="bolder" small />
            <Link to="/about">
              <RText text="About Us" small />
            </Link>
            <Link to="/contact">
              <RText text="Contact Us" small />
            </Link>
            <Link
              to="https://www.instagram.com/unicorn_casita/"
              target="_blank"
            >
              <RText text="Gallery" small />
            </Link>
          </VStack>

          <VStack align="start">
            <RText text="Customer Policies" weight="bolder" small />
            <Link to="/privacypolicy">
              <RText text="Privacy Policy" small />
            </Link>
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
        </SimpleGrid>
      </SimpleGrid>

      <Divider my={8} />
      <VStack textAlign="center">
        <RText text="Copyrights @2024 Unicorn. All rights reserved" small />
        <HStack gap={1}>
          <RText text="powered by" small />
          <Link to="https://macdasy.com/" target="_blank">
            <RText text="Macdasy" small weight="bold" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
