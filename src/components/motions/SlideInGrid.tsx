import { ReactNode } from "react";
import { motion } from "framer-motion";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

interface Props {
  children: ReactNode[];
}

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

const SlideInGrid = ({ children }: Props) => {
  return (
    <SimpleGrid
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
      {children.map((child, index) => (
        <GridItem as={motion.li} key={index} variants={item}>
          {child}
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default SlideInGrid;
