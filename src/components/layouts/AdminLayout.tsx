import { Show, GridItem, Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../library/admin/navigation/Sidebar";
import AppBar from "../library/admin/navigation/AppBar";

const AdminLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      h="100vh"
    >
      <Show above="lg">
        <GridItem area="aside" p={8} px={4} bg="primary.100" h="100%">
          <Sidebar />
        </GridItem>
      </Show>

      <GridItem
        area="main"
        h="100%"
        p={{ base: 0, md: 4 }}
        bg="primary.100"
        mb={{ base: 32, md: 32, lg: 0 }}
      >
        <Box
          p={{ base: 4, md: 8 }}
          h="100%"
          maxH={{ base: "100%", md: 720 }}
          bg="white"
          overflowY="scroll"
          borderRadius={10}
        >
          <Outlet />
        </Box>
      </GridItem>
      <Show below="lg">
        <AppBar />
      </Show>
    </Grid>
  );
};

export default AdminLayout;
