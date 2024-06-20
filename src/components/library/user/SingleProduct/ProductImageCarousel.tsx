import { Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <div className="box">
      <Carousel emulateTouch statusFormatter={() => ""}>
        {images.map((URL, index) => (
          <Box
            key={index}
            className="slide"
            w="100%"
            h={380}
            bgImage={URL}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPos="center"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductImageCarousel;
