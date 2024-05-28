import { useGetAllProducts } from "../../hooks/user/useProduct";
import CuratedGrid from "../../library/user/home/CuratedGrid";
import LandingGrid from "../../library/user/home/LandingGrid";
import MarketBanner from "../../library/user/home/MarketBanner";
import ProductsBento from "../../library/user/home/ProductsBento";
import ServiceGrid from "../../library/user/home/ServiceGrid";

const HomePage = () => {
  const { data, status, fetchStatus } = useGetAllProducts();

  return (
    <>
      <LandingGrid />
      <CuratedGrid />
      <ServiceGrid />
      {fetchStatus === "idle" && status === "success" && (
        <ProductsBento product={data.pages[0].data.docs[0]} />
      )}
      <MarketBanner />
    </>
  );
};

export default HomePage;
