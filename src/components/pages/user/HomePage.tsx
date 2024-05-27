import ServiceGrid from "../../library/user/home/ServiceGrid";
import CuratedGrid from "../../library/user/home/CuratedGrid";
import ProductGrid from "../../library/user/home/ProductGrid";
import MarketBanner from "../../library/user/home/MarketBanner";
import UserLandingImageBanner from "../../library/user/home/UserLandingImageBanner";
import { useGetAllProducts } from "../../hooks/user/useProduct";
import ProductCarousel from "../../library/user/home/ProductSlider/ProductSlider";
import { EmblaOptionsType } from "embla-carousel";

const HomePage = () => {
  const { data: products, status, fetchStatus } = useGetAllProducts();
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <>
      <UserLandingImageBanner />
      {fetchStatus === "idle" && status === "success" && (
        <ProductCarousel
          slides={products.pages[0].data.docs}
          options={OPTIONS}
        />
      )}
      <ServiceGrid />
      <CuratedGrid />
      <ProductGrid />
      <MarketBanner />
    </>
  );
};

export default HomePage;
