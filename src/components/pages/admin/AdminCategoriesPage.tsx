import { Divider, HStack, VStack, useDisclosure } from "@chakra-ui/react";
import AdminGridCover from "../../Utilities/AdminGridCover";
import { RHeading } from "../../Utilities/Typography";
import AddCategoryModal from "../../library/admin/category/AddCategoryModal";
import CategoryCard from "../../library/admin/category/CategoryCard";
import mockCategories from "../../mocks/mockCategories";
import useCategoryEntryStore from "../../store/admin/categoryEntryStore";
import EditCategoryModal from "../../library/admin/category/EditCategoryModal";

const AdminCategoriesPage = () => {
  const category = useCategoryEntryStore((s) => s.category);
  const setCategory = useCategoryEntryStore((s) => s.setCategory);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Categories" color="primary.700" small />
        <AddCategoryModal />
      </HStack>
      <Divider my={4} />
      <AdminGridCover>
        {mockCategories.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            onClick={() => {
              onOpen();
              setCategory(category);
            }}
          />
        ))}
      </AdminGridCover>
      {category && <EditCategoryModal isOpen={isOpen} onClose={onClose} />}
    </VStack>
  );
};

export default AdminCategoriesPage;
