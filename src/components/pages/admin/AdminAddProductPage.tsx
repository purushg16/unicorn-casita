import { Button, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import NewImageUploader from "../../library/admin/editProduct/NewImageUploader";
import ProductNameInput from "../../library/admin/editProduct/ProductNameInput";
import ProductPriceInput from "../../library/admin/editProduct/ProductPriceInput";
import useImageStore from "../../store/admin/imageStore";
import CategorySelector from "../../library/admin/addProduct/CategorySelector";
import StockSelector from "../../library/admin/addProduct/StockSelector";
import AttributeSelector from "../../library/admin/addProduct/AttributeSelector";
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
    <VStack gap={8}>
      <VStack w="100%" align="start">
        <ProductNameInput editMode />
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} w="100%" spacing={8}>
        <ProductPriceInput editMode />
        <StockSelector />
        <CategorySelector />
      </SimpleGrid>

      <AttributeSelector />

      <NewImageUploader limit={4 - images.length} />

      <HStack
        w="100%"
        justify={{ base: "center", md: "end" }}
        gap={4}
        borderRadius={10}
      >
        <Button variant="secondary"> Cancel </Button>
        <Button variant="primary"> Add Product </Button>
      </HStack>
    </VStack>
  );
};

export default AdminAddProductPage;
