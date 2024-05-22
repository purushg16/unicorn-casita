import { Box, HStack, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import Category from "../../../entities/category";
import DeleteCategoryButton from "../ActionButtons/DeleteCategoryButton";

const CategoryCard = ({
  category,
  onClick,
}: {
  category: Category;
  onClick: () => void;
}) => {
  return (
    <VStack
      boxShadow="sm"
      border="1px solid"
      borderColor="primary.100"
      bg="primary.50"
      p={2}
      borderRadius={20}
      overflow="clip"
      minH={200}
      gap={2}
      onClick={onClick}
    >
      <Box
        borderRadius={15}
        flex={1}
        w="100%"
        bgImg={category.imageLink}
        bgSize="cover"
        bgPos="center"
      />
      <HStack w="100%" justify="space-between" p={2}>
        <RText
          textTransform="capitalize"
          text={category.name}
          weight="semibold"
          color="primary.700"
        />
        <DeleteCategoryButton category={category} />
      </HStack>
    </VStack>
  );
};

export default CategoryCard;
