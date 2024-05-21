import { Flex } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import UserNavbar from "../library/user/home/UserNavbar";
import Footer from "../library/user/Footer";
// import UserLandingImageBanner from "../library/user/home/UserLandingImageBanner";
import LandingGrid from "../library/user/home/LandingGrid";
const UserHomeLayout = () => {
  return (
    <Flex flexDir="column" gap={0}>
      <UserNavbar />
      <LandingGrid />
      <Flex
        flexDir="column"
        gap={{ base: 12, md: 12, lg: 20 }}
        mx={{ base: 4, md: 8, lg: 16 }}
        my={12}
      >
        <Outlet />
      </Flex>
      <Footer />
      <ScrollRestoration />
    </Flex>
  );
};
export default UserHomeLayout;
