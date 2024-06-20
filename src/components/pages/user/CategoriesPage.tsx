import { Flex } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import UserCategoriesGrid from "../../library/user/category/UserCategoriesGrid";
import useGetAllCategories from "../../hooks/user/useCategories";
import UserCategorySkeleton from "../../Utilities/Skeletons/UserCategorySkeleton";

const CategoriesPage = () => {
  const { data, status } = useGetAllCategories();

  return (
    <Flex gap={12} flexDir="column" px={{ base: 2, md: 4, lg: 8 }}>
      <Flex gap={4} flexDir="column">
        <RHeading small text="All Categories" color="primary.800" />
        {status === "pending" && <UserCategorySkeleton />}
        {status === "success" && data.length > 0 && (
          <UserCategoriesGrid categories={data} />
        )}
      </Flex>
    </Flex>
  );
};

export default CategoriesPage;
