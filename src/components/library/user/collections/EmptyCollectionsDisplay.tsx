import { Image, VStack } from "@chakra-ui/react";
import img from "../../../../assets/empty_collections.svg";
import { RText } from "../../../Utilities/Typography";
const EmptyCollectionsDisplay = () => {
  return (
    <VStack w="100%" h={250} my={12} gap={4}>
      <Image src={img} alt="no collections" maxH="100%" />
      <RText
        weight="bold"
        text="We are planning to add collections is this category!"
        small
        color="primary.800"
      />
    </VStack>
  );
};

export default EmptyCollectionsDisplay;
