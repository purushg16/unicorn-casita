export default {
  variants: {
    primary: {
      bg: "primary.700",
      color: "primary.100",
      _hover: {
        bg: "primary.800",
      },
    },
    ghost: {
      _hover: {
        bg: "primary.200",
      },
    },
    outline: {
      borderColor: "primary.300",
      color: "primary.700",
    },
    secondary: {
      bg: "primary.100",
      color: "primary.700",
      _hover: {
        bg: "primary.200",
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
};
