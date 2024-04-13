import { Flex, VStack } from "@chakra-ui/react";
import UserNavbar from "../../library/user/home/UserNavbar";
import UserLandingImageBanner from "../../library/user/home/UserLandingImageBanner";
import ServiceGrid from "../../library/user/home/ServiceGrid";
import CuratedGrid from "../../library/user/home/CuratedGrid";
import ProductGrid from "../../library/user/home/ProductGrid";
import MarketBanner from "../../library/user/home/MarketBanner";
import Footer from "../../library/user/Footer";

const HomePage = () => {
  return (
    <Flex flexDir="column" gap={24}>
      <Flex flexDir="column" gap={16} mx={{ base: 4, md: 8, lg: 16 }}>
        <VStack align="start" gap={4} w="100%">
          <UserNavbar />
          <UserLandingImageBanner />
        </VStack>
        <ServiceGrid />
        <CuratedGrid />
        <ProductGrid />
        <MarketBanner />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default HomePage;
