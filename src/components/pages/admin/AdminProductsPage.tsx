import { Divider, HStack, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import AddProductModal from "../../library/admin/addProduct/AddProductModal";
import ProductCard from "../../library/admin/editProduct/ProductCard";
import mockProducts from "../../mocks/mockProducts";
import SlideInGrid from "../../motions/SlideInGrid";

const AdminProductsPage = () => {
  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Products" color="primary.700" small />
        <AddProductModal />
      </HStack>
      <Divider my={4} />
      <SlideInGrid>
        {mockProducts.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </SlideInGrid>
    </VStack>
  );
};

export default AdminProductsPage;
