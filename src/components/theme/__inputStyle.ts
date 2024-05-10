import { defineStyleConfig } from "@chakra-ui/react";

export default defineStyleConfig({
  baseStyle: {
    borderRadius: "xl",
  },

  variants: {
    filled: {
      bg: "primary.700",
      color: "primary.100",
      _hover: {
        bg: "primary.800",
      },
    },
  },
});
