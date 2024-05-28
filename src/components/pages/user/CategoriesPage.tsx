import { Flex } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import BreadCrumbsTile from "../../library/user/BreadCrumbsTile";
import UserCategoriesGrid from "../../library/user/category/UserCategoriesGrid";
import useGetAllCategories from "../../hooks/user/useCategories";
import UserCategorySkeleton from "../../Utilities/Skeletons/UserCategorySkeleton";

const CategoriesPage = () => {
  const { data, status } = useGetAllCategories();

  return (
    <Flex gap={12} flexDir="column" px={{ base: 4, md: 8, lg: 16 }}>
      <BreadCrumbsTile crumbs={["home", "categories"]} />
      <Flex gap={4} flexDir="column">
        <RHeading small text="All Categories" />
        {status === "pending" && <UserCategorySkeleton />}
        {status === "success" && data.length > 0 && (
          <UserCategoriesGrid categories={data} />
        )}
      </Flex>
    </Flex>
  );
};

export default CategoriesPage;
