import { Box, HStack, Image, Show, VStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "../Mobilemenu/MobileMenu";
import CartButton from "./CartButton";
import NavigationLinkStack from "./NavigationLinkStack";
import ProductSearchInput from "./ProductSearch/ProductSearchInput";
import { useEffect, useState } from "react";
import ProductSearchResultModal from "./ProductSearch/ProductSearchResultModal";
import unicorn from "../../../../assets/unicorn_casita.png";

const UserNavbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = useLocation().pathname;

  const [prevPathname, setPrevPathname] = useState<string>("");

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (prevPathname !== pathname) setOpen(false);
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
            <Image
              src={unicorn}
              w={{ base: 100, md: 150 }}
              alt="unicorn casita"
            />
          </Link>
          <HStack align="center" gap={4}>
            <ProductSearchInput
              onClick={() => {
                setOpen(!isOpen);
                setPrevPathname(pathname);
              }}
            />
            <CartButton />
          </HStack>
        </HStack>

        <Show above="md">
          <NavigationLinkStack />
        </Show>
        <ProductSearchResultModal
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        />
      </VStack>
    </VStack>
  );
};

export default UserNavbar;
