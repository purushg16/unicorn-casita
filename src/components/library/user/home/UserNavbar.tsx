import { Flex, HStack, Icon, Show, Spacer } from "@chakra-ui/react";
import { MenuIcon, ShoppingBasket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Label, RHeading } from "../../../Utilities/Typography";

const UserNavbar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      align="center"
      w="100%"
      px={{ base: 4, md: 12 }}
      py={4}
      gap={8}
      pos="sticky"
      top={0}
      bg="white"
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="gray.200"
      justify="space-between"
    >
      <Link to="/">
        <RHeading text="Unicorn Casita" small />
      </Link>
      <Show above="md">
        <HStack gap={8} align="center">
          <Link to="/collections">
            <Label text="Collections" />
          </Link>
          <Link to="/categories">
            <Label text="Categories" />
          </Link>
          <Link to="/collections">
            <Label text="New Arrivals" color="primary.600" />
          </Link>
        </HStack>
        <Spacer />
        <HStack gap={8} align="center">
          <Link to="/cart">
            <Icon
              cursor="pointer"
              strokeWidth={1}
              as={ShoppingBasket}
              boxSize={6}
              onClick={() => navigate("/cart")}
            />
          </Link>
        </HStack>
      </Show>
      <Show below="md">
        <HStack gap={4} align="center">
          <Link to="/cart">
            <Icon as={ShoppingBasket} boxSize={4} strokeWidth={1} />
          </Link>
          <Icon as={MenuIcon} boxSize={4} />
        </HStack>
      </Show>
    </Flex>
  );
};

export default UserNavbar;
