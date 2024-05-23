import {
  Badge,
  Button,
  Flex,
  HStack,
  Icon,
  Show,
  Spacer,
} from "@chakra-ui/react";
import { ShoppingBasket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Label, RHeading } from "../../../Utilities/Typography";
import useUserCartStore from "../../../store/user/useCartStore";
import MobileMenu from "../Mobilemenu/MobileMenu";

const UserNavbar = () => {
  const navigate = useNavigate();
  const quantity = useUserCartStore((s) => s.products).length;

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
            <Button
              pos="relative"
              variant="secondary"
              rightIcon={
                <Icon
                  cursor="pointer"
                  strokeWidth={1}
                  as={ShoppingBasket}
                  onClick={() => navigate("/cart")}
                />
              }
            >
              {quantity > 0 && (
                <Badge
                  pos="absolute"
                  colorScheme="green"
                  right={-2}
                  top={-2}
                  p={1}
                  px={2}
                  borderRadius="xl"
                >
                  {quantity}
                </Badge>
              )}
              Cart
            </Button>
          </Link>
        </HStack>
      </Show>
      <Show below="md">
        <HStack gap={4} align="center">
          <Link to="/cart">
            <Button
              size="sm"
              pos="relative"
              variant="secondary"
              rightIcon={
                <Icon
                  cursor="pointer"
                  strokeWidth={1}
                  as={ShoppingBasket}
                  onClick={() => navigate("/cart")}
                />
              }
            >
              {quantity > 0 && (
                <Badge
                  size="sm"
                  pos="absolute"
                  colorScheme="green"
                  right={-2}
                  top={-2}
                  p={1}
                  px={2}
                  borderRadius="xl"
                >
                  {quantity}
                </Badge>
              )}
              Cart
            </Button>
          </Link>
          <MobileMenu />
        </HStack>
      </Show>
    </Flex>
  );
};

export default UserNavbar;
