import { Box, Image, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import img from "../../../../assets/feeling_blue.svg";

const CancellationPage = () => {
  return (
    <VStack my={8}>
      <Image src={img} alt="Retry" w="40%" mb={8} />
      <Box maxW="60%" textAlign="center">
        <RText
          color="primary.800"
          text="We are regret to say that we do not appreciate any cancellations or refund at Unicorn."
        />
      </Box>
    </VStack>
  );
};

export default CancellationPage;
