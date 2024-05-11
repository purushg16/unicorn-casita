import { VStack, Button, Icon } from "@chakra-ui/react";
import { Repeat2 } from "lucide-react";
import { Label } from "../../../Utilities/Typography";

const RetriveImageButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <VStack
      w="100%"
      p={4}
      color="primary.600"
      bg="primary.50"
      border="1px solid"
      borderColor="primary.100"
      borderRadius={10}
    >
      <Label text="You have deleted all the previously uploaded images" />
      <Button
        colorScheme="primary"
        size="sm"
        leftIcon={<Icon as={Repeat2} />}
        onClick={onClick}
      >
        Retrieve
      </Button>
    </VStack>
  );
};

export default RetriveImageButton;
