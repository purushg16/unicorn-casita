import { Button, Icon, VStack } from "@chakra-ui/react";
import { BadgePlus, Blocks, Eclipse, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AppBarAddButton from "./AppBarAddButton";
import AddShippingPartnerModal from "../SingleOrder/AddShippingPartnerModal";

const AppBarAddMenu = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, toggleVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        buttonRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        toggleVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Button
        ref={buttonRef}
        variant="primary"
        p={2}
        borderRadius={10}
        lineHeight={0}
        onClick={() => toggleVisible(!isVisible)}
      >
        <Icon
          as={BadgePlus}
          boxSize={6}
          color="white"
          transform={isVisible ? "rotate(135deg)" : "none"}
          transition="all 0.5s"
        />
      </Button>
      {isVisible && (
        <VStack
          ref={containerRef}
          borderRadius={10}
          w="max-content"
          pos="absolute"
          left="50%"
          right="50%"
          transform="translate(-50%, -50%)"
          bottom={isVisible ? -4 : -120}
          bg="primary.200"
          align="start"
          p={4}
          transition="all 0.5s"
          onClick={() => toggleVisible(false)}
        >
          <AppBarAddButton title="product" icon={Eclipse} />
          <AppBarAddButton title="category" icon={Blocks} delay={0.2} />
          <AppBarAddButton title="review" icon={Smile} delay={0.4} />
          <AddShippingPartnerModal appbar />
        </VStack>
      )}
    </>
  );
};

export default AppBarAddMenu;
