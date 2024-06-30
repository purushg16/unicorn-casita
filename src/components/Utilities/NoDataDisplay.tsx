import { Flex, Image } from "@chakra-ui/react";
import { RText } from "./Typography";

const NoDataDisplay = ({ img, title }: { img: string; title: string }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      justify="center"
      align="center"
      flexDir="column"
      gap={12}
      left={0}
      top={0}
    >
      <Image src={img} alt="" w={200} />
      <RText
        text={`No ${title} to show!`}
        color="primary.800"
        small
        weight="bold"
      />
    </Flex>
  );
};

export default NoDataDisplay;
