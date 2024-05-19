import { Button, Divider, HStack, Icon, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import ProductCard from "../../library/admin/editProduct/ProductCard";
import mockProducts from "../../mocks/mockProducts";
import SlideInGrid from "../../motions/SlideInGrid";
import { BadgePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminProductsPage = () => {
  const navigate = useNavigate();

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
      <SlideInGrid>
        {mockProducts.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </SlideInGrid>
    </VStack>
  );
};

export default AdminProductsPage;
