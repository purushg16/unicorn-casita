import { VStack, HStack, IconButton, Icon, Box } from "@chakra-ui/react";
import { Settings2 } from "lucide-react";
import { RText } from "../../../Utilities/Typography";
import Category from "../../../entities/category";

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
      p={4}
      borderRadius={10}
      overflow="clip"
      minH={200}
      gap={4}
    >
      <Box
        borderRadius={10}
        flex={1}
        w="100%"
        bgImg={category.imageLink}
        bgSize="cover"
        bgPos="center"
      />
      <HStack w="100%" justify="space-between">
        <RText text={category.name} weight="semibold" color="primary.700" />
        <IconButton
          onClick={onClick}
          aria-label="edit-category"
          icon={<Icon as={Settings2} />}
          size="sm"
          colorScheme="primary"
        />
      </HStack>
    </VStack>
  );
};

export default CategoryCard;
