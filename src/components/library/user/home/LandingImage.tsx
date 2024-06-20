import { Image } from "@chakra-ui/react";
import img from "../../../../assets/unicorn-landing.jpg";

const LandingImage = () => {
  return (
    <Image
      src={img}
      px={4}
      py={{ base: 0, md: 8, lg: 12 }}
      pt={4}
      pb={{ base: 8, md: 12 }}
      w={900}
      mx="auto"
    />
  );
};

export default LandingImage;
