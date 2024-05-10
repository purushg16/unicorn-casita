import { Tag, TagLeftIcon, Icon, TagLabel, Show } from "@chakra-ui/react";
import { CircleX } from "lucide-react";

const ExitEditButton = ({ onClick }: { onClick: (value: boolean) => void }) => {
  return (
    <Tag
      size="lg"
      colorScheme="red"
      cursor="pointer"
      onClick={() => onClick(false)}
    >
      <TagLeftIcon m={{ base: 0, md: 2 }}>
        <Icon as={CircleX} m={0} />
      </TagLeftIcon>
      <Show above="md">
        <TagLabel> Exit </TagLabel>
      </Show>
    </Tag>
  );
};

export default ExitEditButton;
