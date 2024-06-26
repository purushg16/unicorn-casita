import { Button, Divider, HStack, Icon, VStack } from "@chakra-ui/react";
import {
  Blocks,
  CircleUser,
  Eclipse,
  ShoppingBag,
  Smile,
  Snowflake,
} from "lucide-react";
import { RHeading } from "../../../Utilities/Typography";
import SideBarBtn from "./SideBarBtn";
import ChangePasswordModal from "../auth/ChangePasswordModal";
import LogoutButton from "../auth/LogoutButton";
import OfferModal from "../offer/OfferModal";

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
        <OfferModal />
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
        <ChangePasswordModal />
        <LogoutButton />
      </VStack>
    </VStack>
  );
};

export default Sidebar;
