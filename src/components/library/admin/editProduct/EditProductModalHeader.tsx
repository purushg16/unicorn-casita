import { HStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import EnterEditButton from "./EnterEditButton";
import ExitEditButton from "./ExitEditButton";
import ResetButton from "./ResetButton";

const EditProductModalHeader = ({
  editMode,
  exitEditMode,
  enterEditMode,
  reset,
}: {
  editMode: boolean;
  enterEditMode: (value: boolean) => void;
  exitEditMode: () => void;
  reset: () => void;
}) => {
  return (
    <HStack justify="space-between" w="100%">
      <RText text="Product Details" weight="bold" />
      {!editMode && <EnterEditButton onClick={enterEditMode} />}
      {editMode && (
        <HStack>
          <ResetButton onClick={reset} />
          <ExitEditButton onClick={exitEditMode} />
        </HStack>
      )}
    </HStack>
  );
};

export default EditProductModalHeader;
