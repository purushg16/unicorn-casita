import { Icon, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import { X } from "lucide-react";
import useProductQueryStore from "../../../store/user/productQueryStore";

const CategoryFilterRemover = () => {
  const category = useProductQueryStore((s) => s.category);
  const remove = useProductQueryStore((s) => s.removeCategory);

  if (!category) return null;
  return (
    <Tag onClick={remove} colorScheme="primary">
      <TagLabel> Clear Filter </TagLabel>
      <TagRightIcon>
        <Icon as={X} />
      </TagRightIcon>
    </Tag>
  );
};

export default CategoryFilterRemover;
