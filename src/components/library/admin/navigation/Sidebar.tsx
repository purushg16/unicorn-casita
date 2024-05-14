import { Button, Divider, HStack, Icon, VStack } from "@chakra-ui/react";
import {
  Blocks,
  CircleUser,
  Eclipse,
  LockIcon,
  LogOut,
  ShoppingBag,
  Smile,
  Snowflake,
} from "lucide-react";
import { RHeading } from "../../../Utilities/Typography";
import SideBarBtn from "./SideBarBtn";

const Sidebar = () => {
  return (
    <VStack align="start" h="100%" pos="relative">
      <HStack color="primary.700" px={3}>
        <Icon as={Snowflake} boxSize={6} />
        <RHeading text="Unicorn" small color="primary.700" />
      </HStack>
      <VStack w="100%" align="start" my={8}>
        <SideBarBtn label="products" icon={Eclipse} />
        <SideBarBtn label="categories" icon={Blocks} />
        <SideBarBtn label="orders" icon={ShoppingBag} />
        <SideBarBtn label="reviews" icon={Smile} />
      </VStack>
      <VStack
        borderRadius={10}
        w="100%"
        pos="absolute"
        bottom={4}
        bg="primary.50"
        align="start"
        p={4}
        gap={4}
        boxShadow="sm"
      >
        <Button
          variant="link"
          leftIcon={<Icon as={CircleUser} />}
          size="sm"
          color="primary.600"
        >
          Account
        </Button>
        <Divider />
        <Button
          color="black"
          variant="link"
          w="100%"
          justifyContent="space-between"
          rightIcon={<Icon as={LockIcon} />}
          size="sm"
        >
          Change Password
        </Button>
        <Button
          colorScheme="red"
          variant="link"
          w="100%"
          justifyContent="space-between"
          rightIcon={<Icon as={LogOut} />}
          size="sm"
        >
          Logout
        </Button>
      </VStack>
    </VStack>
  );
};

export default Sidebar;
