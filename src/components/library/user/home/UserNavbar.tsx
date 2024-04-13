import { Flex, HStack, Icon, Show, Spacer } from "@chakra-ui/react";
import { Label, RHeading } from "../../../Utilities/Typography";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, SearchIcon, ShoppingCart } from "lucide-react";
import RInput from "../../../Utilities/Input";

const UserNavbar = () => {
  const navigate = useNavigate();

  return (
    <Flex align="center" w="100%" pt={8}>
      <Link to="/">
        <RHeading text="Unicorn Casita" />
      </Link>
      <Spacer />
      <Show above="md">
        <HStack gap={8} align="center">
          <Link to="/collections">
            <Label text="Collections" />
          </Link>
          <Link to="/categories">
            <Label text="Categories" />
          </Link>
          <Link to="/shop">
            <Label text="New Arrivals" color="primary.600" />
          </Link>
        </HStack>
        <Spacer />
        <HStack gap={8} align="center">
          <RInput icon={SearchIcon} placeholder="Search" />
          <Icon
            cursor="pointer"
            as={ShoppingCart}
            boxSize={6}
            onClick={() => navigate("/cart")}
          />
        </HStack>
      </Show>
      <Show below="md">
        <HStack gap={4} align="center">
          <Icon as={ShoppingCart} boxSize={4} />
          <Icon as={MenuIcon} boxSize={4} />
        </HStack>
      </Show>
    </Flex>
  );
};

export default UserNavbar;
