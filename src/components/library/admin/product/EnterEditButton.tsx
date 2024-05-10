import { Tag, TagLeftIcon, Icon, TagLabel } from "@chakra-ui/react";
import { Settings2 } from "lucide-react";

const EnterEditButton = ({
  onClick,
}: {
  onClick: (value: boolean) => void;
}) => {
  return (
    <Tag
      size="lg"
      colorScheme="primary"
      cursor="pointer"
      onClick={() => onClick(true)}
    >
      <TagLeftIcon>
        <Icon as={Settings2} />
      </TagLeftIcon>
      <TagLabel> Edit </TagLabel>
    </Tag>
  );
};

export default EnterEditButton;
