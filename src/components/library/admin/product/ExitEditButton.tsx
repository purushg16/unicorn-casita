import { Tag, TagLeftIcon, Icon, TagLabel } from "@chakra-ui/react";
import { CircleX } from "lucide-react";

const ExitEditButton = ({ onClick }: { onClick: (value: boolean) => void }) => {
  return (
    <Tag
      size="lg"
      colorScheme="red"
      cursor="pointer"
      onClick={() => onClick(false)}
    >
      <TagLeftIcon>
        <Icon as={CircleX} />
      </TagLeftIcon>
      <TagLabel> Exit </TagLabel>
    </Tag>
  );
};

export default ExitEditButton;
