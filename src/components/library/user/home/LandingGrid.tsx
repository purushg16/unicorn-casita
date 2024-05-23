import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Show,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { RHeading, RText } from "../../../Utilities/Typography";
import { ArrowRight } from "lucide-react";
import logo from "../../../../assets/unicorn-casita-logo.png";
import { Link } from "react-router-dom";

const LandingGrid = () => {
  return (
    <SimpleGrid
      my={{ base: 0, md: 0, lg: 24 }}
      columns={{ base: 1, md: 1, lg: 2 }}
      bgPos="center"
      bgSize="cover"
      bgRepeat="repeat"
      spacing={8}
      w="100%"
    >
      <Show below="lg">
        <VStack
          borderLeftRadius={{ base: 0, md: 0, lg: "xl" }}
          minH={{ base: 300, md: 350, lg: 400 }}
          w="100%"
          h="100%"
          bg={
            "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(https://images.unsplash.com/photo-1510074229140-bdfc2ff28550?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          }
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          pos="relative"
          p={4}
          pb={8}
          align="center"
          justify="center"
          fontStyle="italic"
          gap={0}
        >
          <Show below="lg">
            <Image src={logo} alt="" boxSize={70} />
          </Show>
          <RHeading big color="primary.800" text="Unicorn Casita" />
          <RText color="primary.800" text="Let's be unique" />
          <Link to="categories">
            <Button
              mt={4}
              variant="primary"
              rightIcon={<Icon as={ArrowRight} />}
              size="sm"
            >
              Shop Now
            </Button>
          </Link>
        </VStack>
      </Show>
      <VStack
        gap={8}
        minH={{ base: 0, md: 0, lg: "92vh" }}
        align={{ base: "center", md: "center", lg: "start" }}
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
              color="primary.700"
            />
          </Box>
          <Box maxW="70%">
            <RText
              text="Elevate your charm with our collections, each piece a love note to your unique style."
              color="primary.700"
            />
          </Box>
        </VStack>
        <HStack>
          <Link to="collections">
            <Button variant="secondary" size={{ base: "sm", md: "md" }}>
              View Collections
            </Button>
          </Link>
          <Show above="md">
            <Link to="categories">
              <Button
                variant="primary"
                rightIcon={<Icon as={ArrowRight} />}
                size={{ base: "sm", md: "md" }}
              >
                Shop Now
              </Button>
            </Link>
          </Show>
        </HStack>
      </VStack>
      <Show above="lg">
        <VStack
          borderLeftRadius="xl"
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
        />
      </Show>
    </SimpleGrid>
  );
};

export default LandingGrid;
