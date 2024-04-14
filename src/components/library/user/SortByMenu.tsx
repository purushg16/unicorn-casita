import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BlendIcon, ChevronDown } from "lucide-react";

const SortByMenu = () => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={Button}
        fontWeight="normal"
        variant="secondary"
        // variant="outline"
        borderRadius={10}
        rightIcon={<Icon as={ChevronDown} lineHeight="normal" />}
        alignItems="center"
      >
        Sort By
      </MenuButton>
      <MenuList
        p={2}
        borderRadius={10}
        borderColor="primary.200"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
      >
        <MenuItem
          as={Button}
          fontWeight="normal"
          justifyContent="start"
          leftIcon={<Icon as={BlendIcon} color="gray" />}
          borderRadius={5}
          _hover={{ bg: "primary.100" }}
          _active={{ bg: "primary.100" }}
          _focus={{ bg: "primary.100" }}
        >
          lorem ipsum
        </MenuItem>
        <MenuItem
          as={Button}
          fontWeight="normal"
          justifyContent="start"
          leftIcon={<Icon as={BlendIcon} color="gray" />}
          borderRadius={5}
          _hover={{ bg: "primary.100" }}
          _active={{ bg: "primary.100" }}
          _focus={{ bg: "primary.100" }}
        >
          lorem ipsum
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortByMenu;
