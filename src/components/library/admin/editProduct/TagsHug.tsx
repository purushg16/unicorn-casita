import {
  Tag,
  VStack,
  FormLabel,
  HStack,
  TagLabel,
  TagRightIcon,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { CircleX, BadgePlus } from "lucide-react";

const TagsHug = ({
  tags,
  editMode,
  removeTag,
}: {
  tags: string[];
  editMode: boolean;
  removeTag: (tag: string) => void;
}) => {
  return (
    <VStack align="start" color="primary.600" w="100%">
      <FormLabel m={0}> Tags </FormLabel>
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

        {editMode && (
          <IconButton
            colorScheme="purple"
            size="sm"
            aria-label="Add-tag"
            icon={<Icon as={BadgePlus} />}
          />
        )}
      </HStack>
    </VStack>
  );
};

export default TagsHug;
