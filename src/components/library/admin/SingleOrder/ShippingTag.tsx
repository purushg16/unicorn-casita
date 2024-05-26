import { Icon, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { Ban, PlaneTakeoff } from "lucide-react";

const ShippedTag = ({
  success,
  partnerName,
}: {
  success: boolean;
  partnerName?: string;
}) => {
  return (
    <Tag colorScheme={success ? "green" : "red"} variant="outline">
      <TagLeftIcon>
        <Icon as={success ? PlaneTakeoff : Ban} />
      </TagLeftIcon>
      <TagLabel fontSize="xs">
        {success
          ? `${partnerName} has been assigned`
          : "No shipping partner assigned. Click here to assign"}
      </TagLabel>
    </Tag>
  );
};

export default ShippedTag;
