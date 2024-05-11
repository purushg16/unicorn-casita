import {
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { RHeading, RText } from "../../Utilities/Typography";
import AddCategoryModal from "../../library/admin/category/AddCategoryModal";
import AdminGridCover from "../../Utilities/AdminGridCover";
import mockCategories from "../../mocks/mockCategories";
import { Cog } from "lucide-react";

const AdminCategoriesPage = () => {
  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Categories" color="primary.700" small />
        <AddCategoryModal />
      </HStack>
      <Divider my={4} />
      <AdminGridCover>
        {mockCategories.map((category) => (
          <VStack
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
              <RText text={category.name} weight="bold" color="primary.700" />
              <IconButton
                aria-label="edit-category"
                icon={<Icon as={Cog} />}
                size="sm"
                colorScheme="primary"
              />
            </HStack>
          </VStack>
        ))}
      </AdminGridCover>
    </VStack>
  );
};

export default AdminCategoriesPage;
