import { VStack, HStack, IconButton, Icon } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import { Check } from "lucide-react";
import { ProductAttribute } from "../../../entities/product";

const ColorSelector = ({
  attributes,
  selectedColor,
  setColor,
}: {
  attributes: ProductAttribute[];
  selectedColor: ProductAttribute | undefined;
  setColor: (color: ProductAttribute) => void;
}) => {
  return (
    <VStack gap={4} align="start">
      <Label text="Available Colors" color="primary.700" />
      <HStack>
        {attributes.map((color) => (
          <IconButton
            key={color.value}
            aria-label=""
            icon={
              <Icon
                as={Check}
                color={
                  selectedColor && color._id! === selectedColor._id!
                    ? "white"
                    : color.value
                }
              />
            }
            borderRadius="100%"
            bgColor={color.value}
            _hover={{ bgColor: color.value }}
            _active={{ bgColor: color.value }}
            _focus={{ bgColor: color.value }}
            onClick={() => setColor(color)}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default ColorSelector;
