import {
  Box,
  Button,
  HStack,
  Icon,
  Show,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { RHeading, RText } from "../../../Utilities/Typography";
import { ArrowRight } from "lucide-react";

const LandingGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 1, lg: 2 }}
      bg={{
        base: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(https://images.unsplash.com/photo-1510074229140-bdfc2ff28550?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        md: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(https://images.unsplash.com/photo-1510074229140-bdfc2ff28550?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        lg: "primary.100",
      }}
      bgPos="center"
      bgSize="cover"
      bgRepeat="repeat"
      spacing={8}
      w="100%"
    >
      <VStack
        gap={8}
        minH="92svh"
        align={{ base: "center", md: "center", lg: "start" }}
        justify="center"
        px={{ base: 4, md: 16, lg: 0 }}
        pl={{ base: 0, md: 16, lg: 16 }}
      >
        <VStack
          gap={4}
          align={{ base: "center", md: "center", lg: "start" }}
          textAlign={{ base: "center", md: "center", lg: "left" }}
        >
          <Box maxW="90%">
            <RHeading
              big
              text="Let's make a whole new wardrobe together!"
              color="primary.800"
            />
          </Box>
          <Box maxW="70%">
            <RText
              text="Elevate your charm with our collections, each piece a love note to your unique style."
              color="primary.800"
            />
          </Box>
        </VStack>
        <HStack>
          <Show above="md">
            <Button
              variant="white"
              rightIcon={<Icon as={ArrowRight} />}
              size={{ base: "sm", md: "md" }}
            >
              View Collections
            </Button>
          </Show>
          <Button
            variant="primary"
            rightIcon={<Icon as={ArrowRight} />}
            size={{ base: "sm", md: "md" }}
          >
            Shop Now
          </Button>
        </HStack>
      </VStack>
      <Show above="lg">
        <VStack
          w="100%"
          h="100%"
          bgImg="https://images.unsplash.com/photo-1510074229140-bdfc2ff28550?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          pos="relative"
          p={4}
          pb={8}
          align="start"
          justify="end"
          fontStyle="italic"
          gap={0}
        >
          <RHeading small text="Product Name" color="white" />
          <RText small text="Something here..." color="white" />
        </VStack>
      </Show>
    </SimpleGrid>
  );
};

export default LandingGrid;
