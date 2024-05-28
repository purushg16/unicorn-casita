import { useGetAllProducts } from "../../hooks/user/useProduct";
import CuratedGrid from "../../library/user/home/CuratedGrid";
import MarketBanner from "../../library/user/home/MarketBanner";
import ProductsBento from "../../library/user/home/ProductsBento";
import ServiceGrid from "../../library/user/home/ServiceGrid";
import UserLandingImageBanner from "../../library/user/home/UserLandingImageBanner";

const HomePage = () => {
  const { data, status, fetchStatus } = useGetAllProducts();

  return (
    <>
      <UserLandingImageBanner />
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
