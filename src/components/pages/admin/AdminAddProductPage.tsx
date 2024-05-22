import { Button, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import AttributeSelector from "../../library/admin/addProduct/AttributeSelector";
import CategorySelector from "../../library/admin/addProduct/CategorySelector";
import DescriptionInput from "../../library/admin/addProduct/DescriptionInput";
import StockSelector from "../../library/admin/addProduct/StockSelector";
import NewImageUploader from "../../library/admin/editProduct/NewImageUploader";
import ProductNameInput from "../../library/admin/editProduct/ProductNameInput";
import ProductPriceInput from "../../library/admin/editProduct/ProductPriceInput";
import useImageStore from "../../store/admin/imageStore";
import SpecificationsTable from "../../library/admin/addProduct/SpecificationsTable";
import AddProductSubmitButton from "../../library/admin/ActionButtons/AddProductSubmitButton";
// import useProductEntryStore from "../../store/admin/productEntryStore";

const AdminAddProductPage = () => {
  const images = useImageStore((s) => s.images);
  // const clearEntry = useProductEntryStore((s) => s.clearEntry);
  // const clearImages = useImageStore((s) => s.clearImages);

  //   const handleClose = () => {
  //     clearEntry();
  //     clearImages();
  //   };

  return (
    <VStack gap={12}>
      <ProductNameInput editMode />
      <DescriptionInput />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="100%" spacing={12}>
        <ProductPriceInput editMode />
        <StockSelector />
        <CategorySelector />
      </SimpleGrid>
      <AttributeSelector />
      <NewImageUploader limit={4 - images.length} />
      <SpecificationsTable />

      <HStack
        w="100%"
        justify={{ base: "center", md: "end" }}
        gap={4}
        borderRadius={10}
      >
        <Button variant="secondary" size={{ base: "sm", md: "md" }}>
          Cancel
        </Button>
        <AddProductSubmitButton />
      </HStack>
    </VStack>
  );
};

export default AdminAddProductPage;
