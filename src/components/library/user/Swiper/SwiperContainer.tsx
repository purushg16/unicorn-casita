import { Box, Flex, GridItem } from "@chakra-ui/react";
import { ForwardedRef, ReactNode, forwardRef } from "react";

interface Props {
  children: ReactNode[];
  ref: React.RefObject<HTMLDivElement>;
  onScroll: () => void;
}

const SwiperContainer = forwardRef(
  ({ children, onScroll }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Flex
        ref={ref}
        onScroll={onScroll}
        w="100%"
        maxW="100%"
        overflowX="scroll"
        scrollSnapType="x mandatory"
        align="stretch"
        justify="space-around"
        scrollBehavior="smooth"
      >
        {children.map((child, index) => (
          <GridItem
            key={index}
            scrollSnapAlign="start"
            scrollSnapStop="always"
            minW={{ base: "100%", md: "50%", lg: "33.33%" }}
            w={{ base: "100%", md: "50%", lg: "33.33%" }}
          >
            <Box p={4}>{child}</Box>
          </GridItem>
        ))}
      </Flex>
    );
  }
);

export default SwiperContainer;
