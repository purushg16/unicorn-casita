import { Box, Button, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../../Utilities/Typography";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MarketBanner = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      px={{ base: 4, md: 8, lg: 16 }}
      mt={20}
    >
      <Box
        w="100%"
        h="100%"
        borderTopLeftRadius={10}
        borderBottomLeftRadius={{ base: 0, md: 10 }}
        borderTopRightRadius={{ base: 10, md: 0 }}
        minH={200}
        bgImage="https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      />
      <Box
        w="100%"
        h="100%"
        bg="primary.200"
        color="primary.700"
        p={8}
        borderBottomRightRadius={10}
        borderBottomLeftRadius={{ base: 10, md: 0 }}
        borderTopRightRadius={{ base: 0, md: 10 }}
      >
        <VStack align="start" justify="center" w="80%" h="100%">
          <RText color="primary.700" small text="Ourselves," />
          <RHeading text="We offer high quality products & services on every single products" />
          <Link to="collections">
            <Button
              mt={4}
              variant="primary"
              justifyContent="space-between"
              rightIcon={<Icon as={ArrowRight} />}
              gap={8}
              size={{ base: "sm", md: "md" }}
            >
              Never miss
            </Button>
          </Link>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default MarketBanner;
