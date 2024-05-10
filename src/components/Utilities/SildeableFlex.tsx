import { Box, Flex, GridItem } from "@chakra-ui/react";
import { ForwardedRef, ReactNode, forwardRef } from "react";

interface Props {
  children: ReactNode[];
  ref?: React.RefObject<HTMLDivElement>;
  onScroll?: () => void;
  breakpoint?: {
    base: number; // 1
    md: number; // 2
    lg: number; // 3
  };
}

const SildeableFlex = forwardRef(
  (
    { children, onScroll, breakpoint }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const calculateBreakPointWidth = (value: number) =>
      (100 / value).toFixed(2);

    const slidesPerView = breakpoint
      ? {
          base: `${calculateBreakPointWidth(breakpoint.base)}%`,
          md: `${calculateBreakPointWidth(breakpoint.md)}%`,
          lg: `${calculateBreakPointWidth(breakpoint.lg)}%`,
        }
      : { base: "100%", md: "50%", lg: "33.33%" };

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
            minW={slidesPerView}
            w={slidesPerView}
          >
            <Box pb={4} px={4}>
              {child}
            </Box>
          </GridItem>
        ))}
      </Flex>
    );
  }
);

export default SildeableFlex;
