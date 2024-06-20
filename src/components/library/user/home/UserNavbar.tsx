import { Box, HStack, Heading, Show, VStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "../Mobilemenu/MobileMenu";
import CartButton from "./CartButton";
import NavigationLinkStack from "./NavigationLinkStack";
import ProductSearchInput from "./ProductSearch/ProductSearchInput";
import { useEffect, useState } from "react";
import ProductSearchResultModal from "./ProductSearch/ProductSearchResultModal";

const UserNavbar = () => {
  const [isOpen, onOpen] = useState<boolean>(false);
  const pathname = useLocation().pathname;

  const [prevPathname, setPrevPathname] = useState<string>("");

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (prevPathname !== pathname) onOpen(false);
  }, [pathname, prevPathname]);

  return (
    <VStack
      align="center"
      w="100%"
      pos="sticky"
      top={0}
      bg="white"
      transition="all 0.3s"
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="primary.200"
      justify="space-between"
      boxShadow={isOpen ? "0px 10px 40px 20px #d9c7e3" : "none"}
    >
      <VStack w="100%" gap={8} px={{ base: 4, md: 12 }} py={4}>
        <HStack gap={4} w="100%" justify="space-between">
          <Show above="md">
            <Box w={7} />
          </Show>
          <Show below="md">
            <MobileMenu />
          </Show>
          <Link to="/">
            <HStack align="baseline" gap={0}>
              <Heading fontSize={{ base: "xl", md: "3xl" }}>Unicorn</Heading>
              <Heading color="#E19FB4" fontSize={{ base: "xl", md: "3xl" }}>
                Casita
              </Heading>
              <Heading
                color="gray"
                fontSize={{ base: "xs", md: "md", lg: "xl" }}
              >
                .com
              </Heading>
            </HStack>
          </Link>
          <HStack align="center" gap={4}>
            <ProductSearchInput
              onClick={() => {
                onOpen(!isOpen);
                setPrevPathname(pathname);
              }}
            />
            <CartButton />
          </HStack>
        </HStack>

        <Show above="md">
          <NavigationLinkStack />
        </Show>
        <ProductSearchResultModal isOpen={isOpen} />
      </VStack>
    </VStack>
  );
};

export default UserNavbar;
