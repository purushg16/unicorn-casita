import { Icon, Show, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { RotateCcw } from "lucide-react";

const ResetButton = ({ reset }: { reset: () => void }) => {
  return (
    <Tag size="lg" colorScheme="gray" cursor="pointer" onClick={reset}>
      <TagLeftIcon mr={{ base: 0, md: 2 }}>
        <Icon as={RotateCcw} />
      </TagLeftIcon>
      <Show above="md">
        <TagLabel> Reset </TagLabel>
      </Show>
    </Tag>
  );
};

export default ResetButton;
