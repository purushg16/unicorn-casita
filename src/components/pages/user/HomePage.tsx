import UserLandingImageBanner from "../../library/user/home/UserLandingImageBanner";
import ServiceGrid from "../../library/user/home/ServiceGrid";
import CuratedGrid from "../../library/user/home/CuratedGrid";
import ProductGrid from "../../library/user/home/ProductGrid";
import MarketBanner from "../../library/user/home/MarketBanner";

const HomePage = () => {
  return (
    <>
      <UserLandingImageBanner />
      <ServiceGrid />
      <CuratedGrid />
      <ProductGrid />
      <MarketBanner />
    </>
  );
};

export default HomePage;
