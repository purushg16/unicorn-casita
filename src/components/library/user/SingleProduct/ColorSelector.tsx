import { VStack, HStack, IconButton, Icon } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import { Check } from "lucide-react";
import { useState } from "react";
import { ProductAttribute } from "../../../entities/product";

const ColorSelector = ({ attributes }: { attributes: ProductAttribute[] }) => {
  const [selectedColor, setColor] = useState<string>("");

  return (
    <VStack gap={4} align="start">
      <Label text="Available Colors" color="primary.700" />
      <HStack>
        {attributes.map((color) => (
          <IconButton
            aria-label=""
            icon={
              <Icon
                as={Check}
                color={color.value === selectedColor ? "white" : color.value}
              />
            }
            borderRadius="100%"
            bgColor={color.value}
            _hover={{ bgColor: color.value }}
            _active={{ bgColor: color.value }}
            _focus={{ bgColor: color.value }}
            onClick={() => setColor(color.value)}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default ColorSelector;
