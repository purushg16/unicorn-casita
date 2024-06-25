import { Button, Flex, Icon } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useProductQueryStore from "../../../store/user/productQueryStore";
import Category from "../../../entities/category";

const CategoryCard = ({ category }: { category: Category }) => {
  const navigate = useNavigate();
  const setCategory = useProductQueryStore((s) => s.setCategory);

  const handleClick = () => {
    setCategory(category);
    navigate("/collections");
  };

  return (
    <Flex
      w="100%"
      minH={180}
      px={{ base: 4, md: 8 }}
      py={4}
      aspectRatio="4/3"
      flexDir="column"
      justify="end"
      align="center"
      bg={`linear-gradient(rgb(251 251 251 / 10%), rgb(56 21 53 / 71%)), url(${category.imageLink})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      borderRadius={10}
      onClick={handleClick}
    >
      <Button
        w="100%"
        justifyContent="space-between"
        bg="#FCECEF"
        _hover={{ bg: "#F9DCDC" }}
        _active={{ bg: "#F9DCDC" }}
        _focus={{ bg: "#F9DCDC" }}
        rightIcon={<Icon as={ArrowRight} />}
        size={{ base: "sm", md: "md" }}
        textTransform="capitalize"
      >
        {category.name}
      </Button>
    </Flex>
  );
};

export default CategoryCard;
