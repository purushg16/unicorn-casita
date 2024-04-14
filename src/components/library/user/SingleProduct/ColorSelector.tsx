import { VStack, HStack, IconButton, Icon } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import { Check } from "lucide-react";
import { useState } from "react";

const colors = ["black", "pink", "red"];

const ColorSelector = () => {
  const [selectedColor, setColor] = useState<string>("");

  return (
    <VStack gap={4} align="start">
      <Label text="Available Colors" />
      <HStack>
        {colors.map((color) => (
          <IconButton
            aria-label=""
            icon={
              <Icon
                as={Check}
                color={color === selectedColor ? "white" : color}
              />
            }
            borderRadius="100%"
            bgColor={color}
            _hover={{ bgColor: color }}
            _active={{ bgColor: color }}
            _focus={{ bgColor: color }}
            onClick={() => setColor(color)}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default ColorSelector;
