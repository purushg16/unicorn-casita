import {
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { User } from "lucide-react";
import { RHeading } from "../../../Utilities/Typography";
import ChangePasswordModal from "../auth/ChangePasswordModal";
import LogoutButton from "../auth/LogoutButton";

const TopBar = () => {
  return (
    <HStack w="100%" bg="transparent" justify="space-between">
      <RHeading small text="Unicorn" color="primary.800" />

      <Menu>
        <MenuButton
          variant="white"
          size="xs"
          as={IconButton}
          aria-label="account-btn"
          icon={<Icon as={User} />}
        />
        <MenuList>
          <MenuItem>
            <ChangePasswordModal small />
          </MenuItem>
          <MenuItem>
            <LogoutButton small />
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default TopBar;
