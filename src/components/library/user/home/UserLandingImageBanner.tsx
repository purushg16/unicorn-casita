import {
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  VStack,
} from "@chakra-ui/react";
import { RHeading, RText } from "../../../Utilities/Typography";
import { ArrowRight } from "lucide-react";
import AnimateMove from "../../../motions/Move";
import { Link } from "react-router-dom";
import img from "../../../../assets/logo.png";

const UserLandingImageBanner = () => {
  return (
    <Flex
      w="100%"
      minH={{ base: "80svh", md: "80svh" }}
      bg={`linear-gradient(rgb(251 251 251 / 10%), rgb(56 21 53 / 71%)), url(https://images.unsplash.com/photo-1628926379972-9843ad139a8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
      bgSize="cover"
      bgPos="center"
      align={{ base: "center", md: "start" }}
      justify={{ base: "center", md: "space-between" }}
      color="white"
      textAlign={{ base: "center", md: "left" }}
      flexDir="column"
      gap={8}
      px={{ base: 4, md: 12, lg: 24 }}
      py={24}
    >
      <VStack
        align={{ base: "center", md: "start" }}
        gap={0}
        w={{ base: "100%", md: "70%", lg: "60%" }}
        maxW={{ base: "100%", md: "70%", lg: "60%" }}
      >
        <AnimateMove>
          <HStack>
            <Image src={img} alt="logo" w={12} mx="auto" />
            <Heading
              fontSize={{ base: "large", md: "xx-large" }}
              lineHeight={1}
              mt={4}
            >
              Unicorn Casita
            </Heading>
          </HStack>
        </AnimateMove>
      </VStack>

      <VStack
        align={{ base: "center", md: "start" }}
        maxW={{ base: "80%", md: "70%", lg: "60%" }}
        gap={4}
      >
        <AnimateMove delay={0.6}>
          <RHeading text="Make yourself more lovable with our collections" />
        </AnimateMove>
        <AnimateMove delay={0.6}>
          <RText text="We have the potential of higher craftmenship, which could provide elegant  & ultimatum in design, view & personality of our products." />
        </AnimateMove>
        <AnimateMove delay={0.8}>
          <Link to="/collections">
            <Button
              variant="secondary"
              rightIcon={<Icon as={ArrowRight} boxSize={4} />}
              gap={4}
              size={{ base: "md", md: "lg" }}
            >
              Shop Now
            </Button>
          </Link>
        </AnimateMove>
      </VStack>
    </Flex>
  );
};

export default UserLandingImageBanner;
