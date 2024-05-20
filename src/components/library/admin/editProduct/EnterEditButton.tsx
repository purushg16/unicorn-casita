import { Button, Icon } from "@chakra-ui/react";
import { Settings2 } from "lucide-react";

const EnterEditButton = ({
  onClick,
}: {
  onClick: (value: boolean) => void;
}) => {
  return (
    <Button
      variant="primary"
      onClick={() => onClick(true)}
      leftIcon={<Icon as={Settings2} />}
    >
      Edit
    </Button>
  );
};

export default EnterEditButton;
