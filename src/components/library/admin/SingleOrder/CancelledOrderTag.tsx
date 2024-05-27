import { Box, Icon } from "@chakra-ui/react";
import { XCircle } from "lucide-react";

const CancelledOrderTag = () => {
  return (
    <Box p={2} bg="red.100" borderRadius="xl" lineHeight={0}>
      <Icon as={XCircle} color="red" lineHeight={0} boxSize={3} />
    </Box>
  );
};

export default CancelledOrderTag;
