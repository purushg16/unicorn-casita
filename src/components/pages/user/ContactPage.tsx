import { HStack, Image, Show, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RHeading, RText } from "../../Utilities/Typography";
import img from "../../../assets/message.svg";

const ContactPage = () => {
  return (
    <VStack
      w="100%"
      align="start"
      my={12}
      gap={20}
      mb={32}
      px={{ base: 4, md: 8, lg: 16 }}
      overflowX="clip"
    >
      <VStack align="start" gap={0}>
        <RHeading big text="Contact Us" color="primary.700" />
        <HStack gap={4}>
          <Link
            to="https://www.instagram.com/unicorn_casita/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            <RText text="Gallery" small />
          </Link>
          <RText text="|" />
          <Link
            to="https://www.instagram.com/unicorn_casita/reels/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            <RText text="Reels" small />
          </Link>
        </HStack>
      </VStack>

      <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} spacingY={12}>
        <VStack gap={8} align="start" pos="relative" maxW="100%">
          <VStack align="start">
            <RText color="primary.900" small text="Call Us" />
            <RText text="+91 63-797-857-55" />
          </VStack>
          <VStack align="start">
            <RText color="primary.900" small text="Email Us" />
            <RText text="unicorncasita@gmail.com" />
          </VStack>
          <VStack align="start">
            <RText color="primary.900" small text="Located At" />
            <RText text="Salem, Tamilnadu, India" />
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
