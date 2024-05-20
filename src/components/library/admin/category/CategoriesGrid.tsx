import { useDisclosure } from "@chakra-ui/react";
import Category from "../../../entities/category";
import SlideInGrid from "../../../motions/SlideInGrid";
import useCategoryEntryStore from "../../../store/admin/categoryEntryStore";
import CategoryCard from "./CategoryCard";
import EditCategoryModal from "./EditCategoryModal";

const CategoriesGrid = ({ categories }: { categories: Category[] }) => {
  const category = useCategoryEntryStore((s) => s.category);
  const setCategory = useCategoryEntryStore((s) => s.setCategory);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <SlideInGrid>
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            onClick={() => {
              onOpen();
              setCategory(category);
            }}
          />
        ))}
      </SlideInGrid>

      {category && <EditCategoryModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default CategoriesGrid;
