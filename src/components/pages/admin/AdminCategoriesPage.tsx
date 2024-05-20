import { Divider, HStack, VStack } from "@chakra-ui/react";
import CategoriesSkeleton from "../../Utilities/Skeletons/CategoriesSkeleton";
import { RHeading } from "../../Utilities/Typography";
import { useGetAllCategories } from "../../hooks/admin/useCategory";
import AddCategoryModal from "../../library/admin/category/AddCategoryModal";
import CategoriesGrid from "../../library/admin/category/CategoriesGrid";

const AdminCategoriesPage = () => {
  const {
    data: categories,
    isSuccess,
    isLoading,
    isFetching,
    isRefetching,
  } = useGetAllCategories();

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Categories" color="primary.700" small />
        <AddCategoryModal />
      </HStack>
      <Divider my={4} />
      {(isLoading || isFetching || isRefetching) && <CategoriesSkeleton />}
      {isSuccess && <CategoriesGrid categories={categories} />}
    </VStack>
  );
};

export default AdminCategoriesPage;
