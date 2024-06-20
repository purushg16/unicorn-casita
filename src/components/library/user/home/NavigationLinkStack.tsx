import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Label } from "../../../Utilities/Typography";

const NavigationLinkStack = () => {
  return (
    <HStack gap={12} align="center">
      <Link to="/collections">
        <Label text="Collections 🌏" color="primary.800" />
      </Link>
      <Link to="/categories">
        <Label text="Categories 💫" color="primary.800" />
      </Link>
      <Link to="/bestsellings">
        <Label text="Best Sellings 😍" color="primary.800" />
      </Link>
      <Link to="/wholesale">
        <Label text="Buy in Wholesale 📦" color="primary.800" />
      </Link>
    </HStack>
  );
};

export default NavigationLinkStack;
