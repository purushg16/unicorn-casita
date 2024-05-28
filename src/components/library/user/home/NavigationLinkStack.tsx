import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Label } from "../../../Utilities/Typography";

const NavigationLinkStack = () => {
  return (
    <HStack gap={8} align="center">
      <Link to="/collections">
        <Label text="Collections" color="primary.800" />
      </Link>
      <Link to="/categories">
        <Label text="Categories" color="primary.800" />
      </Link>
    </HStack>
  );
};

export default NavigationLinkStack;
