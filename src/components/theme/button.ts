import { defineStyleConfig } from "@chakra-ui/react";

export default defineStyleConfig({
  variants: {
    black: {
      bg: "black",
      color: "white",
      _hover: {
        bg: "#0000008",
      },
    },
    primary: {
      bg: "primary.700",
      color: "primary.100",
      _hover: {
        bg: "primary.800",
      },
      _disabled: {
        background: "primary.500",
        backgroundColor: "primary.500",
        _focus: {
          background: "primary.500 !important",
          backgroundColor: "primary.500 !important",
        },
        _active: {
          background: "primary.500 !important",
          backgroundColor: "primary.500 !important",
        },
        _hover: {
          background: "primary.500 !important",
          backgroundColor: "primary.500 !important",
        },
      },
    },
    ghost: {
      _hover: {
        bg: "primary.200",
      },
    },
    secondary: {
      bg: "primary.200",
      color: "primary.700",
      _hover: {
        bg: "primary.300",
      },
    },
    white: {
      bg: "white",
      color: "black",
      _hover: {
        bg: "white",
      },
    },
  },
});
