import { Button, Icon } from "@chakra-ui/react";
import { Settings2 } from "lucide-react";

const EnterEditButton = ({
  onClick,
  isDisabled = true,
}: {
  onClick: (value: boolean) => void;
  isDisabled?: boolean;
}) => {
  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={() => onClick(true)}
      leftIcon={<Icon as={Settings2} />}
      isDisabled={isDisabled}
    >
      Edit
    </Button>
  );
};

export default EnterEditButton;
