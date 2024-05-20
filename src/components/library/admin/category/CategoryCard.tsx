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
      p={2}
      borderRadius={20}
      overflow="clip"
      minH={200}
      gap={2}
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
        <IconButton
          onClick={onClick}
          aria-label="edit-category"
          icon={<Icon as={Settings2} />}
          size={{ base: "xs", md: "sm" }}
          variant="primary"
        />
      </HStack>
    </VStack>
  );
};

export default CategoryCard;
