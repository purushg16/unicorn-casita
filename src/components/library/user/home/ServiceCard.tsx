import { Box, Icon, VStack } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { Label, RText } from "../../../Utilities/Typography";

interface Props {
  icon: LucideIcon;
  label: string;
  desc: string;
}
const ServiceCard = ({ icon, label, desc }: Props) => {
  return (
    <VStack align="start" gap={2}>
      <Box
        mb={4}
        p={4}
        borderRadius={10}
        bg="primary.100"
        border="1px solid"
        borderColor="primary.200"
        h="max-content"
        lineHeight="normal"
      >
        <Icon as={icon} lineHeight="normal" boxSize={6} color="primary.800" />
      </Box>
      <Label text={label} weight="bolder" color="primary.800" />
      <RText text={desc} small color="primary.700" />
    </VStack>
  );
};

export default ServiceCard;
