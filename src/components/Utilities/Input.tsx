import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  placeholder?: string;
  iconPlacement?: "left" | "right";
}

const RInput = ({ icon, placeholder = "", iconPlacement = "left" }: Props) => {
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
      {iconPlacement === "left" && (
        <InputLeftElement>
          <Icon as={icon} color={colorMode === "dark" ? "white" : "gray"} />
        </InputLeftElement>
      )}

      {iconPlacement === "right" && (
        <InputRightElement>
          <Icon as={icon} color={colorMode === "dark" ? "white" : "gray"} />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default RInput;
