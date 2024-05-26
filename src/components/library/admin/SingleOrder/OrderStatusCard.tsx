import { VStack, Box } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import { ReactNode } from "react";

const OrderStatusCard = ({
  status,
  tag,
  color,
  icon,
}: {
  status: string;
  tag: string;
  color: string;
  icon: ReactNode;
}) => {
  return (
    <VStack
      gap={0}
      minW={180}
      minH={120}
      align="start"
      justify="end"
      bg={`${color}.100`}
      p={4}
      borderRadius="xl"
    >
      {icon}
      <Box mb={2} />
      <RText
        text={status}
        weight="bold"
        color={`${color}.700`}
        textTransform="capitalize"
      />
      <RText small weight="bold" color={`${color}.500`} text={tag} />
    </VStack>
  );
};

export default OrderStatusCard;
