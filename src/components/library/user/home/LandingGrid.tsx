import { Image } from "@chakra-ui/react";
import img from "../../../../assets/unicorn-landing.png";

const LandingGrid = () => {
  return (
    <Image
      src={img}
      px={4}
      py={{ base: 0, md: 8, lg: 12 }}
      pb={{ base: 8, md: 12 }}
      w={1000}
      mx="auto"
    />

    // <VStack py={16} bg="#CDF0EA" w="100%" gap={4}>
    //   <HStack
    //     bg="white"
    //     border="1px solid"
    //     borderColor="primary.200"
    //     borderRadius="xl"
    //     p={4}
    //     py={2}
    //   >
    //     <Image src={logo} alt="" boxSize={7} />
    //     <RHeading
    //       small
    //       weight="bold"
    //       text="Unicorn Casita"
    //       color="primary.800"
    //     />
    //   </HStack>

    //   <Box maxW="65%" textAlign="center" color="primary.800">
    //     <RHeading
    //       big
    //       text="40% Offer on any item you pick from our elegantly crafted store."
    //     />
    //   </Box>

    //   <HStack flexDir={{ base: "column", md: "row" }} mt={4}>
    //     {/* <Link to="collections">
    //         <Button variant="secondary" size={{ base: "md", md: "lg" }} w={200}>
    //           View Collections
    //         </Button>
    //       </Link> */}
    //     <Link to="categories">
    //       <Button
    //         variant="primary"
    //         rightIcon={<Icon as={ArrowUpRight} />}
    //         size={{ base: "md", md: "lg" }}
    //         w={200}
    //       >
    //         Shop Now
    //       </Button>
    //     </Link>
    //   </HStack>
    // </VStack>
  );
};

export default LandingGrid;
