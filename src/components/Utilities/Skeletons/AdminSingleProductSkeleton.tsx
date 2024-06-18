import { Flex, HStack, Spinner } from "@chakra-ui/react";
import { RHeading } from "../Typography";

const AdminSingleProductSkeleton = () => {
  return (
    <Flex justify="center" align="center" h="100%">
      <HStack>
        <Spinner color="primary.900" />
        <RHeading text="Loading..." color="primary.900" small />
      </HStack>
    </Flex>
  );
};

export default AdminSingleProductSkeleton;
