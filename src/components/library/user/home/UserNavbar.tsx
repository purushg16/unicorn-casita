import { Box, HStack, Heading, Show, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileMenu from "../Mobilemenu/MobileMenu";
import CartButton from "./CartButton";
import NavigationLinkStack from "./NavigationLinkStack";

const UserNavbar = () => {
  return (
    <VStack
      align="center"
      w="100%"
      px={{ base: 4, md: 12 }}
      py={4}
      gap={8}
      pos="sticky"
      top={0}
      bg="white"
      transition="all 0.7s"
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="primary.200"
      justify="space-between"
    >
      <HStack gap={4} w="100%" justify="space-between">
        <Show above="md">
          <Box w={7} />
        </Show>
        <Show below="md">
          <MobileMenu />
        </Show>
        <Link to="/">
          <HStack align="baseline" gap={0}>
            <Heading
              mr={{ base: 1, md: 2 }}
              fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
            >
              Unicorn
            </Heading>
            <Heading
              color="#E19FB4"
              fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
            >
              Casita
            </Heading>
            <Heading color="gray" fontSize={{ base: "xs", md: "lg", lg: "xl" }}>
              .com
            </Heading>
          </HStack>
        </Link>
        <CartButton />
      </HStack>

      <Show above="md">
        <NavigationLinkStack />
      </Show>
    </VStack>
  );
};

export default UserNavbar;
