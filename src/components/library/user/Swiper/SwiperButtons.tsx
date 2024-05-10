import { HStack, IconButton, Icon } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  leftDisabled: boolean;
  rightDisabled: boolean;
  scrollToLeft: () => void;
  scrollToRight: () => void;
}

const SwiperButtons = ({
  scrollToLeft,
  scrollToRight,
  leftDisabled,
  rightDisabled,
}: Props) => {
  return (
    <HStack gap={2} align="center">
      <IconButton
        icon={<Icon as={ChevronLeft} />}
        onClick={scrollToLeft}
        aria-label="left"
        variant="secondary"
        isDisabled={leftDisabled}
        size={{ base: "sm", md: "md", lg: "md" }}
      />
      <IconButton
        icon={<Icon as={ChevronRight} />}
        onClick={scrollToRight}
        aria-label="right"
        variant="secondary"
        isDisabled={rightDisabled}
        size={{ base: "sm", md: "md", lg: "md" }}
      />
    </HStack>
  );
};

export default SwiperButtons;
