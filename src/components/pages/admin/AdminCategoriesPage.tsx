import { Divider, HStack, VStack } from "@chakra-ui/react";
import img from "../../../assets/empty_categories.svg";
import NoDataDisplay from "../../Utilities/NoDataDisplay";
import CategoriesSkeleton from "../../Utilities/Skeletons/CategoriesSkeleton";
import { RHeading } from "../../Utilities/Typography";
import { useGetAllCategories } from "../../hooks/admin/useCategory";
import AddCategoryModal from "../../library/admin/category/AddCategoryModal";
import CategoriesGrid from "../../library/admin/category/CategoriesGrid";

const AdminCategoriesPage = () => {
  const { data: categories, status, fetchStatus } = useGetAllCategories();

  return (
    <VStack align="start" h="100%">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Categories" color="primary.700" small />
        <AddCategoryModal />
      </HStack>
      <Divider my={4} />
      {(status === "pending" || fetchStatus === "fetching") && (
        <CategoriesSkeleton />
      )}
      {status === "success" &&
        fetchStatus === "idle" &&
        categories.length === 0 && (
          <NoDataDisplay img={img} title="Categories" />
        )}
      {status === "success" && fetchStatus !== "fetching" && (
        <CategoriesGrid categories={categories} />
      )}
    </VStack>
  );
};

export default AdminCategoriesPage;
