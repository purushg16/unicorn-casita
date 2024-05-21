import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { RHeading } from "../../../Utilities/Typography";
import { ArrowRight } from "lucide-react";

const UserLandingImageBanner = () => {
  return (
    <Flex
      w="100%"
      h="95svh"
      bgImage="https://plus.unsplash.com/premium_photo-1678834778167-5b2172bccb6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      bgSize="cover"
      bgPos="center"
      align="center"
      justify="center"
      color="white"
      textAlign="center"
      flexDir="column"
      gap={8}
    >
      <Box maxW={{ base: "90%", md: "70%", lg: "60%" }}>
        <RHeading big text="Make yourself more lovable with our collections" />
      </Box>
      <Button
        variant="primary"
        rightIcon={<Icon as={ArrowRight} boxSize={4} />}
        gap={4}
      >
        Shop Now
      </Button>
    </Flex>
  );
};

export default UserLandingImageBanner;
