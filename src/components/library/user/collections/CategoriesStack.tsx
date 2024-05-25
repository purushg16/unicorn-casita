import { HStack, Icon, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import useGetAllCategories from "../../../hooks/user/useCategories";
import { XCircle } from "lucide-react";
import useProductQueryStore from "../../../store/user/productQueryStore";

const CategoriesStack = () => {
  const { data } = useGetAllCategories();
  const queryCategory = useProductQueryStore((s) => s.category);
  const setCategory = useProductQueryStore((s) => s.setCategory);
  const removeCategory = useProductQueryStore((s) => s.removeCategory);

  return (
    <HStack gap={4} w="100%" maxW="100%" overflowX="auto">
      {data?.map((category) => {
        const isCategoryQueried = queryCategory && queryCategory === category;
        return (
          <Tag
            p={4}
            py={2}
            h="100%"
            borderRadius="full"
            onClick={() => setCategory(category)}
            colorScheme={isCategoryQueried ? "green" : "gray"}
            order={isCategoryQueried ? -1 : undefined}
          >
            <TagLabel> {category.name} </TagLabel>
            {isCategoryQueried && (
              <TagRightIcon
                onClick={(e) => {
                  e.stopPropagation();
                  removeCategory();
                }}
              >
                <Icon as={XCircle} />
              </TagRightIcon>
            )}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default CategoriesStack;
