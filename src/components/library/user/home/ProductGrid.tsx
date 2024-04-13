import { Flex, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import { RHeading } from "../../../Utilities/Typography";
import SwiperContainer from "../Swiper/SwiperContainer";
import ProductCard from "../Product/ProductCard";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SwiperProgressBar from "../Swiper/SwiperProgressBar";

const ProductGrid = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [leftbtn, isLeftDisabled] = useState<boolean>(true);
  const [rightbtn, isRightDisabled] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const scrollToLeft = () => {
    if (ref.current) ref.current.scrollLeft -= 300;
  };

  const scrollToRight = () => {
    if (ref.current) ref.current.scrollLeft += 250;
  };

  const controlButton = () => {
    if (ref.current?.scrollLeft === 0) {
      isLeftDisabled(true);
      setProgress(0);
    } else isLeftDisabled(false);

    if (ref.current && ref.current?.scrollWidth && ref.current?.clientWidth) {
      setProgress(
        (100 * ref.current.scrollLeft) /
          (ref.current?.scrollWidth - ref.current?.clientWidth)
      );
    }

    if (
      ref.current &&
      ref.current?.scrollWidth &&
      ref.current?.clientWidth &&
      ref.current?.scrollLeft ===
        ref.current?.scrollWidth - ref.current?.clientWidth
    ) {
      isRightDisabled(true);
      setProgress(100);
    } else isRightDisabled(false);
  };

  return (
    <VStack align="start" gap={4}>
      <Flex w="100%" justify="space-between">
        <RHeading small text="Featured Products" />
        <HStack gap={2} align="center">
          <IconButton
            icon={<Icon as={ChevronLeft} />}
            onClick={scrollToLeft}
            aria-label="left"
            variant="secondary"
            isDisabled={leftbtn}
            size={{ base: "sm", md: "md", lg: "md" }}
          />
          <IconButton
            icon={<Icon as={ChevronRight} />}
            onClick={scrollToRight}
            aria-label="right"
            variant="secondary"
            isDisabled={rightbtn}
            size={{ base: "sm", md: "md", lg: "md" }}
          />
        </HStack>
      </Flex>

      <SwiperContainer ref={ref} onScroll={controlButton}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SwiperContainer>
      <SwiperProgressBar value={progress} />
    </VStack>
  );
};

export default ProductGrid;
