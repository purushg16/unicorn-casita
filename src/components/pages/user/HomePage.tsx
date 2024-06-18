import { VStack } from "@chakra-ui/react";
import useGetAllCategories from "../../hooks/user/useCategories";
import LandingGrid from "../../library/user/home/LandingGrid";
import MarketBanner from "../../library/user/home/MarketBanner";
import ProductsGrid from "../../library/user/home/ProductsGrid/ProductsGrid";
import ServiceBento from "../../library/user/home/ServiceBento/ServiceBento";
import CuratedGrid from "../../library/user/home/CuratedGrid";
import BestSellings from "../../library/user/home/ProductsGrid/BestSellings";

const HomePage = () => {
  const { data: categories, status: catStatus } = useGetAllCategories();

  return (
    <>
      <LandingGrid />
      <VStack gap={24} w="100%">
        <BestSellings />
        {catStatus === "success" &&
          categories.length > 0 &&
          categories?.map((category, index) => (
            <>
              <ProductsGrid key={index} category={category} />
              {index == 1 && <ServiceBento />}
            </>
          ))}
      </VStack>
      <CuratedGrid />
      <MarketBanner />
    </>
  );
};

export default HomePage;
