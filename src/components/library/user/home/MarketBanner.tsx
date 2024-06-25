import { Box, Button, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RHeading, RText } from "../../../Utilities/Typography";

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
        bg="#ffecef"
        color="#ED67C5"
        p={8}
        borderBottomRightRadius={10}
        borderBottomLeftRadius={{ base: 10, md: 0 }}
        borderTopRightRadius={{ base: 0, md: 10 }}
      >
        <VStack align="start" justify="center" w="80%" h="100%">
          <RText color="primary.300" small text="WHOLESALE IS LIVE!" />
          <RHeading big text="Want to buy in wholesale?" />
          <Link to="wholesale" style={{ padding: 0 }}>
            <Button
              mt={4}
              justifyContent="space-between"
              gap={8}
              size={{ base: "sm", md: "md" }}
              variant="text"
              px={0}
            >
              Click Here!
            </Button>
          </Link>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default MarketBanner;
