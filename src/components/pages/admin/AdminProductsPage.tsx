import {
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  VStack,
} from "@chakra-ui/react";
import { BadgePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RHeading, RText } from "../../Utilities/Typography";
import { useGetAllProducts } from "../../hooks/admin/useProduct";
import ProductsGrid from "../../library/admin/product/ProductsGrid";
import ProductsSkeleton from "../../Utilities/Skeletons/ProductsSkeleton";
import img from "../../../assets/empty_notes.svg";

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
      {status === "success" && products.pages[0].data.docs.length === 0 && (
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
            text="No Products to show!"
            color="primary.800"
            small
            weight="bold"
          />
        </Flex>
      )}

      {status === "success" && (
        <ProductsGrid products={products.pages[0].data.docs} />
      )}
    </VStack>
  );
};

export default AdminProductsPage;
