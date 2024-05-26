import { VStack, FormLabel } from "@chakra-ui/react";
import { Label } from "./Typography";

const CaptionedDetails = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <VStack align="start" gap={0}>
      <FormLabel
        fontSize="xs"
        color="gray"
        fontWeight="semibold"
        textTransform="uppercase"
      >
        {title}
      </FormLabel>
      <Label text={value} />
    </VStack>
  );
};

export default CaptionedDetails;
