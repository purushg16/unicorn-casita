import { Tag, TagLeftIcon, Icon, TagLabel } from "@chakra-ui/react";
import { XCircle } from "lucide-react";

const CancelledOrderTag = () => {
  return (
    <Tag colorScheme="red">
      <TagLeftIcon>
        <Icon as={XCircle} />
      </TagLeftIcon>
      <TagLabel>Order has been cancelled </TagLabel>
    </Tag>
  );
};

export default CancelledOrderTag;
