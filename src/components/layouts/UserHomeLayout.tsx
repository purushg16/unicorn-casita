import { Flex } from "@chakra-ui/react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import UserNavbar from "../library/user/home/UserNavbar";
import Footer from "../library/user/Footer";
import OfferBanner from "../library/user/home/OfferBanner";
// import UserLandingImageBanner from "../library/user/home/UserLandingImageBanner";
// import LandingGrid from "../library/user/home/LandingGrid";
const UserHomeLayout = () => {
  const pathname = useLocation().pathname;

  const splittedPath = pathname.split("/");
  return (
    <Flex flexDir="column" gap={0}>
      <OfferBanner />
      <UserNavbar />
      <Flex
        flexDir="column"
        gap={0}
        mt={
          pathname === "/" ||
          pathname === "/wholesale" ||
          pathname === "/bestsellings" ||
          (splittedPath.length === 3 && splittedPath[1] === "collections")
            ? 0
            : 12
        }
        mb={12}
      >
        <Outlet />
      </Flex>
      <Footer />
      <ScrollRestoration />
    </Flex>
  );
};
export default UserHomeLayout;
