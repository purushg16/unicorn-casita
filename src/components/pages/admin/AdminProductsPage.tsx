import { Button, Divider, HStack, Icon, VStack } from "@chakra-ui/react";
import { BadgePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RHeading } from "../../Utilities/Typography";
import { useGetAllProducts } from "../../hooks/admin/useProduct";
import ProductsGrid from "../../library/admin/product/ProductsGrid";
import ProductsSkeleton from "../../Utilities/Skeletons/ProductsSkeleton";

const AdminProductsPage = () => {
  const navigate = useNavigate();
  const { data: products, status } = useGetAllProducts();

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Products" color="primary.700" small />
        <Button
          id="new-product-btn"
          onClick={() => navigate("new")}
          size="sm"
          variant="primary"
          leftIcon={<Icon as={BadgePlus} />}
        >
          New Product
        </Button>
      </HStack>
      <Divider my={4} />
      {status === "pending" && <ProductsSkeleton />}
      {status === "success" && (
        <ProductsGrid products={products.pages[0].data.docs} />
      )}
    </VStack>
  );
};

export default AdminProductsPage;
