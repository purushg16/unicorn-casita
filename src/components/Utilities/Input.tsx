import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  placeholder?: string;
}

const RInput = ({ icon, placeholder = "" }: Props) => {
  const { colorMode } = useColorMode();

  const bg = colorMode === "dark" ? "primary.500" : "primary.50";
  const border = colorMode === "dark" ? "none" : "primary.200";

  return (
    <InputGroup size={{ base: "sm", md: "md" }} borderRadius={10}>
      <Input
        bg={bg}
        border={colorMode === "dark" ? "none" : "1px solid"}
        borderColor={border}
        outline="none"
        boxShadow="none"
        _active={{ borderColor: border, outline: "none", boxShadow: "none" }}
        _focus={{ borderColor: border, outline: "none", boxShadow: "none" }}
        _hover={{ borderColor: border, outline: "none", boxShadow: "none" }}
        placeholder={placeholder}
      />
      <InputLeftElement>
        <Icon as={icon} color={colorMode === "dark" ? "white" : "gray"} />
      </InputLeftElement>
    </InputGroup>
  );
};

export default RInput;
