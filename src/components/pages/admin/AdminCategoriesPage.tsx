import { Divider, Flex, HStack, VStack, Image } from "@chakra-ui/react";
import CategoriesSkeleton from "../../Utilities/Skeletons/CategoriesSkeleton";
import { RHeading, RText } from "../../Utilities/Typography";
import { useGetAllCategories } from "../../hooks/admin/useCategory";
import AddCategoryModal from "../../library/admin/category/AddCategoryModal";
import CategoriesGrid from "../../library/admin/category/CategoriesGrid";
import img from "../../../assets/empty_categories.svg";

const AdminCategoriesPage = () => {
  const { data: categories, status } = useGetAllCategories();

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Categories" color="primary.700" small />
        <AddCategoryModal />
      </HStack>
      <Divider my={4} />
      {status === "pending" && <CategoriesSkeleton />}
      {status === "success" && categories.length !== 0 && (
        <Flex
          w="100%"
          h="100%"
          justify="center"
          align="center"
          pos="absolute"
          flexDir="column"
          gap={12}
        >
          <Image src={img} alt="" w={200} />
          <RText
            text="No Categories to show!"
            color="primary.800"
            small
            weight="bold"
          />
        </Flex>
      )}
      {status === "success" && <CategoriesGrid categories={categories} />}
    </VStack>
  );
};

export default AdminCategoriesPage;
