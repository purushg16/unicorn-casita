import { Flex, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RHeading } from "../../../Utilities/Typography";
import ProductCard from "../Product/ProductCard";
import SwiperButtons from "../Swiper/SwiperButtons";
import SwiperContainer from "../Swiper/SwiperContainer";
import SwiperProgressBar from "../Swiper/SwiperProgressBar";
import { useGetAllProducts } from "../../../hooks/user/useProduct";

const ProductGrid = () => {
  const { data, status } = useGetAllProducts();
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
        <SwiperButtons
          leftDisabled={leftbtn}
          rightDisabled={rightbtn}
          scrollToLeft={scrollToLeft}
          scrollToRight={scrollToRight}
        />
      </Flex>

      {status === "success" && (
        <SwiperContainer ref={ref} onScroll={controlButton}>
          <></>
          {data.pages[0].data.docs.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SwiperContainer>
      )}
      <SwiperProgressBar value={progress} />
    </VStack>
  );
};

export default ProductGrid;
