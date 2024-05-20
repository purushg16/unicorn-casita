import { Flex, Image } from "@chakra-ui/react";
import { RText } from "./Typography";

const NoDataDisplay = ({ img }: { img: string }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      justify="center"
      align="center"
      pos="absolute"
      flexDir="column"
      gap={12}
      left={0}
      top={0}
    >
      <Image src={img} alt="" w={200} />
      <RText text="No Order to show!" color="primary.800" small weight="bold" />
    </Flex>
  );
};

export default NoDataDisplay;
