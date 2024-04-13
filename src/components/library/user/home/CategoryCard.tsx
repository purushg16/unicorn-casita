import { Button, Flex, Icon } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

interface Props {
  label: string;
  img: string;
}

const CategoryCard = ({ label, img }: Props) => {
  return (
    <Flex
      w="100%"
      px={{ base: 4, md: 8 }}
      py={4}
      aspectRatio="4/3"
      flexDir="column"
      justify="end"
      align="center"
      bgImg={img}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      borderRadius={10}
    >
      <Button
        w="100%"
        py={6}
        justifyContent="space-between"
        variant="secondary"
        rightIcon={<Icon as={ArrowRight} boxSize={4} />}
        size={{ base: "sm", md: "md" }}
      >
        {label}
      </Button>
    </Flex>
  );
};

export default CategoryCard;
