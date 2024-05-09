import { VStack } from "@chakra-ui/react";
import { Blocks, Eclipse, ShoppingBag, Smile } from "lucide-react";
import { RHeading } from "../../../Utilities/Typography";
import SideBarBtn from "./SideBarBtn";

const Sidebar = () => {
  return (
    <VStack align="start">
      <RHeading text="Unicorn Casita" small />
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
