import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import { Aperture, BadgePlus, Smile, Truck } from "lucide-react";
import { RHeading } from "../../../Utilities/Typography";

const ServiceGrid = () => {
  return (
    <VStack
      align="start"
      gap={16}
      px={{ base: 8, md: 8, lg: 16 }}
      py={{ base: 12, md: 12, lg: 20 }}
      bg="primary.200"
    >
      <VStack gap={0} align="start">
        <RHeading color="primary.800" weight="normal" text="We Provide" small />
        <RHeading color="primary.800" text="Best Customer Experience" small />
      </VStack>
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 4 }}
        spacingX={{ base: 12, md: 16, lg: 20 }}
        spacingY={12}
        w="100%"
      >
        <Box flex={1}>
          <ServiceCard
            icon={Aperture}
            label="Original Products"
            desc="We provide money back guarantee if the products are not original."
          />
        </Box>
        <Box flex={1}>
          <ServiceCard
            icon={Smile}
            label="Satisfaction Guarantee"
            desc="Exchange the product you’ve purchased if does not fit on you."
          />
        </Box>
        <Box flex={1}>
          <ServiceCard
            icon={BadgePlus}
            label="New Arrivals"
            desc="We update our collections almost single  everyday with curation."
          />
        </Box>
        <Box flex={1}>
          <ServiceCard
            icon={Truck}
            label="Free & Fast Shipping"
            desc="We offer fast & free shipping for out lovable & loyal customers."
          />
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default ServiceGrid;
