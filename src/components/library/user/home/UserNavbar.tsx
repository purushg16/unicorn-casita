import { Flex, HStack, Image, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { RHeading } from "../../../Utilities/Typography";
import MobileMenu from "../Mobilemenu/MobileMenu";
import CartButton from "./CartButton";
import NavigationLinkStack from "./NavigationLinkStack";
import { useState } from "react";
import { scroll } from "framer-motion";

const UserNavbar = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  scroll((e) => setScrollY(e));

  return (
    <Flex
      align="center"
      w="100%"
      px={{ base: 6, md: 12 }}
      py={4}
      gap={8}
      pos="sticky"
      top={0}
      bg={scrollY > 0.01 ? "white" : "#CDF0EA"}
      transition="all 0.7s"
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="primary.200"
      justify="space-between"
    >
      <Link to="/">
        <HStack align="center" gap={4}>
          <Image src={logo} alt="logo" boxSize={10} />
          <Show above="md">
            <RHeading text="Unicorn Casita" small color="primary.800" />
          </Show>
          <Show above="md">
            <NavigationLinkStack />
          </Show>
        </HStack>
      </Link>
      <HStack gap={4}>
        <CartButton />
        <Show below="md">
          <MobileMenu />
        </Show>
      </HStack>
    </Flex>
  );
};

export default UserNavbar;
