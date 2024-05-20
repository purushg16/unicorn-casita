import MinimalCategoriesSkeleton from "../../../Utilities/Skeletons/MinimalCategoriesSkeleton";
import { useGetAllCategories } from "../../../hooks/admin/useCategory";
import MinimalCategoriesGrid from "../category/MinimalCategoriesGrid";

const CategoriesSelectionList = () => {
  const { data: categories, status } = useGetAllCategories();

  return (
    <>
      {status === "pending" && <MinimalCategoriesSkeleton />}
      {status === "success" && (
        <MinimalCategoriesGrid categories={categories} />
      )}
    </>
  );
};

export default CategoriesSelectionList;
