import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import useProductQueryStore from "../../store/user/productQueryStore";
import useGetAllCategories from "../../hooks/user/useCategories";

const CategoryFilter = ({ isDisabled }: { isDisabled: boolean }) => {
  const { data: categories } = useGetAllCategories();
  const category = useProductQueryStore((s) => s.category);
  const setCategory = useProductQueryStore((s) => s.setCategory);

  return (
    <Menu autoSelect={false}>
      <MenuButton
        isDisabled={isDisabled}
        as={Button}
        fontWeight="normal"
        variant="secondary"
        borderRadius={10}
        rightIcon={<Icon as={ChevronDown} lineHeight="normal" />}
        alignItems="center"
        size="sm"
      >
        {category ? category.name : "Select Category"}
      </MenuButton>
      <MenuList
        p={2}
        borderRadius={10}
        borderColor="primary.200"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
      >
        {categories &&
          categories.map((category) => (
            <MenuItem
              color="primary.800"
              key={category._id}
              as={Button}
              fontWeight="normal"
              justifyContent="start"
              borderRadius={0}
              _hover={{ bg: "primary.100" }}
              _active={{ bg: "primary.100" }}
              _focus={{ bg: "primary.100" }}
              onClick={() => setCategory(category)}
            >
              {category.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryFilter;
