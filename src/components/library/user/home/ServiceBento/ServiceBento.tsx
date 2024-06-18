import { Grid } from "@chakra-ui/react";
import Head from "./Head";
import Original from "./Original";
import Satisfaction from "./Satisfaction";
import Delivery from "./Delivery";
import NewArrivals from "./NewArrivals";

const ServiceBento = () => {
  return (
    <Grid
      mt={4}
      w={{ base: "90%", md: "80%" }}
      templateColumns="repeat(6, 1fr)"
      gap={4}
    >
      <Head />
      <Original />
      <Satisfaction />
      <Delivery />
      <NewArrivals />
    </Grid>
  );
};

export default ServiceBento;
