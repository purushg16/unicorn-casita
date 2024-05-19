import {
  Menu,
  MenuButton,
  Button,
  Icon,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const variants = ["size", "color"];

const VariantsMenu = () => {
  const isDisabled = !useProductEntryStore((s) => s.product)?.isAttribute;
  const variant = useProductEntryStore((s) => s.product)?.attributeName;
  const setVariant = useProductEntryStore((s) => s.setAttributeName);

  return (
    <Menu autoSelect={false}>
      <MenuButton
        minW={150}
        as={Button}
        variant="primary"
        rightIcon={<Icon as={ChevronDown} />}
        textAlign="start"
        textTransform="capitalize"
        isDisabled={isDisabled}
      >
        {variant || "Select Variant"}
      </MenuButton>
      <MenuList overflow="hidden">
        {variants.map((va) => (
          <MenuItem
            key={va}
            fontWeight={600}
            onClick={() => setVariant(va)}
            textTransform="capitalize"
          >
            {va}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default VariantsMenu;
