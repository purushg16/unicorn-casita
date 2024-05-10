import { HStack, Icon, VStack } from "@chakra-ui/react";
import { Blocks, Eclipse, ShoppingBag, Smile, Snowflake } from "lucide-react";
import { RHeading } from "../../../Utilities/Typography";
import SideBarBtn from "./SideBarBtn";

const Sidebar = () => {
  return (
    <VStack align="start">
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
    </VStack>
  );
};

export default Sidebar;
