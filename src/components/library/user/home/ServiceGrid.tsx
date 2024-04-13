import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import { Aperture, BadgePlus, Smile, Truck } from "lucide-react";
import { RHeading } from "../../../Utilities/Typography";

const ServiceGrid = () => {
  return (
    <VStack align="start" gap={8}>
      <VStack gap={0} align="start">
        <RHeading color="gray" text="We Provide" small />
        <RHeading text="Best Customer Experience" small />
      </VStack>
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 4 }}
        spacing={8}
        w="100%"
        px={4}
      >
        <Box flex={1}>
          <ServiceCard
            icon={Aperture}
            label="Original Products"
            desc="We provide money back guarantee if the products are not original"
          />
        </Box>
        <Box flex={1}>
          <ServiceCard
            icon={Smile}
            label="Satisfaction Guarantee"
            desc="Exchange the product you’ve purchased if does not fit on you"
          />
        </Box>
        <Box flex={1}>
          <ServiceCard
            icon={BadgePlus}
            label="New Arrivals"
            desc="We update our collections almost everyday"
          />
        </Box>
        <Box flex={1}>
          <ServiceCard
            icon={Truck}
            label="Free & Fast Shipping"
            desc="We offer fast & free shipping for out lovable & loyal customers"
          />
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default ServiceGrid;
