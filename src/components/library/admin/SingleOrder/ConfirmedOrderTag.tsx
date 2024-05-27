import { Box, Icon } from "@chakra-ui/react";
import { Check } from "lucide-react";

const ConfirmedOrderTag = () => {
  return (
    <Box p={2} bg="blue.100" borderRadius="xl" lineHeight={0}>
      <Icon as={Check} boxSize={3} color="blue" lineHeight={0} />
    </Box>
  );
};

export default ConfirmedOrderTag;
