import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import primaryColor from "./primaryColor";
import grayColor from "./grayColor";
import button from "./button";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    primary: primaryColor,
    gray: grayColor,
  },
  components: {
    Button: button,
  },
});

export default theme;
