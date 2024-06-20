import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Product from "../../../entities/product";
import { InfiniteData } from "@tanstack/react-query";
import { PaginatedResponse } from "../../../entities/paginatedResponse";
import { SinglePropertyResponse } from "../../../services/api-client";
import React from "react";

const ProductGrid = ({
  data,
}: {
  data: InfiniteData<SinglePropertyResponse<PaginatedResponse<Product>>>;
}) => {
  return (
    <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacingX={1} spacingY={4}>
      {data.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.data.docs.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
