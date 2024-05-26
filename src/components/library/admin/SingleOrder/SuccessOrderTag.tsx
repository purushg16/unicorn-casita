import { Tag, TagLeftIcon, Icon, TagLabel } from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";

const SuccessOrderTag = () => {
  return (
    <Tag colorScheme="green">
      <TagLeftIcon>
        <Icon as={CheckCircle} />
      </TagLeftIcon>
      <TagLabel>Order has been completed successfully </TagLabel>
    </Tag>
  );
};

export default SuccessOrderTag;
