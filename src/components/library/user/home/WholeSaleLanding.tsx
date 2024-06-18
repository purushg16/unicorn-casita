import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import logo from "../../../../assets/logo.png";
import { RHeading } from "../../../Utilities/Typography";

const WholeSaleLandingGrid = () => {
  return (
    <VStack py={16} bg="#CDF0EA" w="100%" gap={4}>
      <HStack
        bg="white"
        border="1px solid"
        borderColor="primary.200"
        borderRadius="xl"
        p={4}
        py={2}
      >
        <Image src={logo} alt="" boxSize={7} />
        <RHeading
          small
          weight="bold"
          text="Unicorn Casita"
          color="primary.800"
        />
      </HStack>

      <Box maxW="65%" textAlign="center" color="primary.800">
        <RHeading
          big
          text="Pick items on wholesale & save money instantly on Unicorn Casita!"
        />
      </Box>
    </VStack>
  );
};

export default WholeSaleLandingGrid;
