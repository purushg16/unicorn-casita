import { VStack, Button, Icon } from "@chakra-ui/react";
import { Repeat2 } from "lucide-react";
import { Label } from "../../../Utilities/Typography";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const RetriveImageButton = () => {
  const resetImage = useProductEntryStore((s) => s.resetImage);

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
        onClick={resetImage}
      >
        Retrieve
      </Button>
    </VStack>
  );
};

export default RetriveImageButton;
