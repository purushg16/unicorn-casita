import { VStack, HStack, IconButton, Icon, FormLabel } from "@chakra-ui/react";
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
      <FormLabel fontSize="xs" color="primary.800" fontWeight="bold">
        Available Colors
      </FormLabel>
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
