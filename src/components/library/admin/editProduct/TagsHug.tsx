import { FormLabel, HStack, VStack } from "@chakra-ui/react";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import AddTagModal from "./AddTagModal";
import TagContainer from "./TagContainer";

const TagsHug = ({ editMode }: { editMode: boolean }) => {
  const tags = useProductEntryStore((s) => s.product)?.tags;

  if (tags)
    return (
      <VStack align="start" color="primary.600" w="100%">
        <HStack w="100%" justify="space-between">
          <FormLabel m={0}> Tags </FormLabel>
          {editMode && <AddTagModal />}
        </HStack>
        <TagContainer editMode={editMode} />
      </VStack>
    );
};

export default TagsHug;
