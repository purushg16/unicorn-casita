import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { RHeading, RText } from "../../../Utilities/Typography";

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
      {/* <Show below="lg">
        <VStack
          borderLeftRadius={{ base: 0, md: 0, lg: "xl" }}
          minH={{ base: 300, md: 350, lg: 400 }}
          w="100%"
          h="100%"
          bg={
            "linear-gradient(rgb(129 129 129 / 0%), rgb(106 64 113 / 50%)), url(https://images.unsplash.com/photo-1620291699655-d958150a3ff8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
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
          <Image src={logo} alt="" boxSize={70} />
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
      </Show> */}
      <VStack
        gap={8}
        minH={{ base: "80svh", lg: "92vh" }}
        align={{ base: "center", md: "center", lg: "start" }}
        justifyContent={{ base: "center", md: "center", lg: "start" }}
        px={{ base: 4, md: 16, lg: 0 }}
        pl={{ base: 0, md: 16, lg: 16 }}
        bg={{
          base: "linear-gradient(rgb(245 245 245 / 61%), rgb(106 64 113 / 50%)), url(https://images.unsplash.com/photo-1620291699655-d958150a3ff8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          md: "linear-gradient(rgb(245 245 245 / 61%), rgb(106 64 113 / 50%)), url(https://images.unsplash.com/photo-1620291699655-d958150a3ff8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          lg: "none",
        }}
        bgPos="center"
        bgSize="cover"
        bgRepeat="repeat"
      >
        <VStack
          gap={4}
          align={{ base: "center", md: "center", lg: "start" }}
          textAlign={{ base: "center", md: "center", lg: "left" }}
        >
          <HStack bg="primary.50" borderRadius="xl" p={4} py={2}>
            <Image src={logo} alt="" boxSize={7} />
            <RHeading
              small
              weight="bold"
              text="Unicorn Casita"
              color="primary.800"
            />
          </HStack>
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
        <HStack flexDir={{ base: "column", md: "row" }}>
          <Link to="collections">
            <Button variant="secondary" size={{ base: "md", md: "lg" }} w={200}>
              View Collections
            </Button>
          </Link>
          <Link to="categories">
            <Button
              variant="primary"
              rightIcon={<Icon as={ArrowUpRight} />}
              size={{ base: "md", md: "lg" }}
              w={200}
            >
              Shop Now
            </Button>
          </Link>
        </HStack>
      </VStack>

      <VStack
        display={{ base: "none", md: "none", lg: "flex" }}
        borderLeftRadius="xl"
        w="100%"
        h="100%"
        bgImg="https://images.unsplash.com/photo-1620291699655-d958150a3ff8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    </SimpleGrid>
  );
};

export default LandingGrid;
