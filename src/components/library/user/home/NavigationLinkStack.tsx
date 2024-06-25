import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Label } from "../../../Utilities/Typography";

const NavigationLinkStack = () => {
  return (
    <HStack gap={12} align="center">
      <Link to="/collections">
        <Label text="Collections 🌏" color="#ed63c3" />
      </Link>
      <Link to="/categories">
        <Label text="Categories 💫" color="#ed63c3" />
      </Link>
      <Link to="/bestsellings">
        <Label text="Best Sellings 😍" color="#ed63c3" />
      </Link>
      <Link to="/wholesale">
        <Label text="Buy in Wholesale 📦" color="#ed63c3" />
      </Link>
    </HStack>
  );
};

export default NavigationLinkStack;
