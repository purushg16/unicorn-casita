import { InfiniteData } from "@tanstack/react-query";
import { PaginatedResponse } from "../../../entities/paginatedResponse";
import Product from "../../../entities/product";
import { SinglePropertyResponse } from "../../../services/api-client";
import ProductCard from "../editProduct/ProductCard";
import React from "react";
import { motion } from "framer-motion";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProductsGrid = ({
  data,
}: {
  data: InfiniteData<SinglePropertyResponse<PaginatedResponse<Product>>>;
}) => {
  return (
    <SimpleGrid
      spacingX={4}
      spacingY={8}
      w="100%"
      as={motion.ul}
      variants={container}
      initial="hidden"
      animate="visible"
      my={4}
      columns={{ base: 2, md: 3, lg: 4 }}
      spacing={4}
      style={{ listStyleType: "none" }}
    >
      {data.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.data.docs.map((product, index) => (
            <GridItem as={motion.li} key={index} variants={item}>
              <ProductCard key={product._id} product={product} />
            </GridItem>
          ))}
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
