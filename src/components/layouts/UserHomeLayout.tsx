import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../library/user/home/UserNavbar";
import Footer from "../library/user/Footer";
const UserHomeLayout = () => {
  return (
    <Flex flexDir="column" gap={16}>
      <Flex
        flexDir="column"
        gap={{ base: 12, md: 12, lg: 20 }}
        mx={{ base: 4, md: 8, lg: 16 }}
      >
        <UserNavbar />
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
};
export default UserHomeLayout;
