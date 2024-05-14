import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import primaryColor from "./primaryColor";
import grayColor from "./grayColor";
import button from "./button";
import __inputStyle from "./__inputStyle";

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
    Input: __inputStyle,
  },
  styles: {
    global: {
      ".chakra-modal__content": {
        borderRadius: "2xl !important",
      },
      ".chakra-menu__menu-list": {
        borderRadius: "2xl !important",
      },
      // ".chakra-input": {
      //   borderRadius: "xl !important",
      // },
    },
  },
});

export default theme;
