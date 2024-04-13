import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";

const SortByMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        fontWeight="normal"
        variant="secondary"
        // variant="outline"
        borderRadius={10}
        rightIcon={<Icon as={ChevronDown} lineHeight="normal" />}
        alignItems="center"
      >
        None
      </MenuButton>
      <MenuList p={2} borderRadius={20} borderColor="primary.200">
        <MenuItem
          fontWeight="bold"
          borderRadius={10}
          color="primary.700"
          _hover={{ bg: "primary.200" }}
          _active={{ bg: "primary.200" }}
          _focus={{ bg: "primary.200" }}
        >
          lorem ipsum
        </MenuItem>
        <MenuItem
          fontWeight="bold"
          borderRadius={10}
          color="primary.700"
          _hover={{ bg: "primary.200" }}
          _active={{ bg: "primary.200" }}
          _focus={{ bg: "primary.200" }}
        >
          lorem ipsum
        </MenuItem>
        <MenuItem
          fontWeight="bold"
          borderRadius={10}
          color="primary.700"
          _hover={{ bg: "primary.200" }}
          _active={{ bg: "primary.200" }}
          _focus={{ bg: "primary.200" }}
        >
          lorem ipsum
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortByMenu;
