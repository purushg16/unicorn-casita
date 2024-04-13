import { Slider, SliderTrack, SliderFilledTrack } from "@chakra-ui/react";

const SwiperProgressBar = ({ value }: { value: number }) => {
  return (
    <Slider
      size="lg"
      aria-label="slider-ex-2"
      colorScheme="primary"
      value={value}
      w={250}
      m="auto"
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
    </Slider>
  );
};

export default SwiperProgressBar;
