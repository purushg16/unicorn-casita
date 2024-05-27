import { Box, Icon } from "@chakra-ui/react";
import { BadgeCheck } from "lucide-react";

const SuccessOrderTag = () => (
  <Box p={2} bg="green.100" borderRadius="xl" lineHeight={0}>
    <Icon as={BadgeCheck} boxSize={3} color="green" lineHeight={0} />
  </Box>
);

export default SuccessOrderTag;
