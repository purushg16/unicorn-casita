import { Tag, HStack, TagLabel, TagRightIcon, Icon } from "@chakra-ui/react";
import { CircleX } from "lucide-react";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import { Label } from "../../../Utilities/Typography";

const TagContainer = ({ editMode }: { editMode: boolean }) => {
  const tags = useProductEntryStore((s) => s.product)?.tags;
  const removeTag = useProductEntryStore((s) => s.removeTag);

  if (tags)
    return (
      <HStack
        w="100%"
        maxW="100%"
        gap={4}
        flexWrap="wrap"
        p={4}
        bg="primary.50"
        borderRadius={10}
        border="1px dashed"
        borderColor="primary.200"
      >
        {tags.length === 0 && <Label text="No Tags" color="primary.600" />}
        {tags.map((tag, i) => (
          <Tag colorScheme="primary" key={i}>
            <TagLabel textTransform="capitalize"> {tag} </TagLabel>
            {editMode && (
              <TagRightIcon onClick={() => removeTag(tag)} cursor="pointer">
                <Icon as={CircleX} />
              </TagRightIcon>
            )}
          </Tag>
        ))}
      </HStack>
    );
};

export default TagContainer;
