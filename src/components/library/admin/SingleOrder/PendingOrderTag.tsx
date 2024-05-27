import { Box, Icon } from "@chakra-ui/react";
import { Clock } from "lucide-react";

const PendingOrderTag = () => {
  return (
    <Box p={2} bg="yellow.100" borderRadius="xl" lineHeight={0}>
      <Icon as={Clock} color="yellow.600" lineHeight={0} boxSize={3} />
    </Box>
  );
};

export default PendingOrderTag;
