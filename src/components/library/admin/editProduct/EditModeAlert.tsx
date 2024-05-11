import { Icon, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { TriangleAlert } from "lucide-react";

const EditModeAlert = () => {
  return (
    <Tag colorScheme="red" size="sm">
      <TagLeftIcon>
        <Icon as={TriangleAlert} />
      </TagLeftIcon>
      <TagLabel> You are in edit mode. Tap "Exit" to exit </TagLabel>
    </Tag>
  );
};

export default EditModeAlert;
