import { Button, Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../../Utilities/Typography";
import { ArrowRight } from "lucide-react";
import AnimateMove from "../../../motions/Move";
import { Link } from "react-router-dom";

const UserLandingImageBanner = () => {
  return (
    <Flex
      w="100%"
      minH={{ base: "100svh", md: "80svh" }}
      bg={`linear-gradient(rgb(251 251 251 / 10%), rgb(56 21 53 / 71%)), url(https://images.unsplash.com/photo-1628926379972-9843ad139a8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
      bgSize="cover"
      bgPos="center"
      align="start"
      justify="space-between"
      color="white"
      textAlign="left"
      flexDir="column"
      gap={8}
      px={{ base: 4, md: 12, lg: 24 }}
      py={{ base: 24, md: 16 }}
    >
      <VStack
        align="start"
        gap={0}
        maxW={{ base: "90%", md: "70%", lg: "60%" }}
      >
        <AnimateMove>
          <Heading fontSize={{ base: "4rem", md: "8rem" }} lineHeight={0.4}>
            Unicorn
          </Heading>
          <Heading fontSize={{ base: "4rem", md: "8rem" }}>Casita</Heading>
        </AnimateMove>
      </VStack>

      <VStack
        align="start"
        maxW={{ base: "90%", md: "70%", lg: "60%" }}
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
              size={{ base: "sm", md: "md" }}
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
