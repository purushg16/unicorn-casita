import { Box, SimpleGrid } from "@chakra-ui/react";
import Product from "../../../../entities/product";
import ProductCard from "../../Product/ProductCard";

const SearchedProductsGrid = ({ products }: { products: Product[] }) => {
  if (products.length > 0)
    return (
      <Box
        maxH="80svh"
        overflowY="scroll"
        pt={0}
        pb={{ base: 40, md: 200 }}
        w="100%"
      >
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="100%">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </SimpleGrid>
      </Box>
    );
};

export default SearchedProductsGrid;
