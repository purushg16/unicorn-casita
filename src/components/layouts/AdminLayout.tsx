import { Show, GridItem, Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../library/admin/navigation/Sidebar";

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

      <GridItem area="main" h="100%" p={4} bg="primary.100">
        <Box
          p={4}
          h="100%"
          maxH="100%"
          bg="primary.50"
          overflowY="scroll"
          borderRadius={10}
        >
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default AdminLayout;
