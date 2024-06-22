import { Box } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import { useGetOffer } from "../../../hooks/admin/useOffer";

const OfferBanner = () => {
  const { data, status, fetchStatus } = useGetOffer();

  return (
    <Box p={4} bg="#fafafa" textAlign="center">
      {status === "success" && fetchStatus === "idle" && (
        <Label text={data.data.offers} color="#E19FB4" />
      )}
    </Box>
  );
};

export default OfferBanner;
