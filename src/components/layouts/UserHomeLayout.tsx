import { Flex } from "@chakra-ui/react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import UserNavbar from "../library/user/home/UserNavbar";
import Footer from "../library/user/Footer";
// import UserLandingImageBanner from "../library/user/home/UserLandingImageBanner";
// import LandingGrid from "../library/user/home/LandingGrid";
const UserHomeLayout = () => {
  const pathname = useLocation().pathname;
  return (
    <Flex flexDir="column" gap={0}>
      <UserNavbar />
      <Flex
        flexDir="column"
        gap={{ base: 12, md: 12, lg: 20 }}
        mt={pathname === "/" || pathname === "/wholesale" ? 0 : 12}
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
