import { Icon, Show, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { RotateCcw } from "lucide-react";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import useImageStore from "../../../store/admin/imageStore";

const ResetButton = () => {
  const reset = useProductEntryStore((s) => s.resetEntry);
  const clearImages = useImageStore((s) => s.clearImages);

  const handleClick = () => {
    reset();
    clearImages();
  };

  return (
    <Tag size="lg" colorScheme="gray" cursor="pointer" onClick={handleClick}>
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
