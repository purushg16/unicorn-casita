import { HStack, Image, Show, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RHeading, RText } from "../../Utilities/Typography";
import img from "../../../assets/message.svg";

const ContactPage = () => {
  return (
    <VStack w="100%" align="start" my={12} gap={20} mb={32}>
      <VStack align="start" gap={0}>
        <RHeading big text="Contact Us" color="primary.700" />
        <HStack gap={4}>
          <Link
            to="www.instagram.com"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            <RText text="Instagram" small />
          </Link>
          <RText text="|" />
          <Link
            to="www.instagram.com"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            <RText text="Instagram" small />
          </Link>
        </HStack>
      </VStack>

      <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} spacingY={12}>
        <VStack gap={8} align="start" pos="relative">
          <VStack align="start">
            <RText color="primary.900" small text="Call Us" />
            <RText text="+91 999 888 77 66" />
          </VStack>
          <VStack align="start">
            <RText color="primary.900" small text="Email Us" />
            <RText text="something@gmail.com" />
          </VStack>
          <VStack align="start">
            <RText color="primary.900" small text="Located At" />
            <RText text="Tirupur, Tamilnadu, India" />
          </VStack>
          <Show below="md">
            <Image src={img} pos="absolute" opacity={0.5} right={-135} />
          </Show>
        </VStack>
        <Show above="md">
          <Image src={img} />
        </Show>
      </SimpleGrid>
    </VStack>
  );
};

export default ContactPage;
