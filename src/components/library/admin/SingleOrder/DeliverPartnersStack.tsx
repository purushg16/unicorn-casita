import {
  FormLabel,
  HStack,
  Icon,
  Tag,
  TagLabel,
  TagLeftIcon,
  VStack,
} from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import { useGetAllDeliveryParteners } from "../../../hooks/admin/useDeliveryPartner";
import { AdminShipOrder } from "../../../hooks/admin/useOrder";
import DeleteDeliverPartnerAlert from "../ActionButtons/DeleteDeliverPartnerAlert";
import DeliveryPartnerSkeletonGrid from "../../../Utilities/Skeletons/DeliveryPartnerSkeletonGrid";
import { Info } from "lucide-react";

const DeliverPartnersStack = ({
  selectedPartner,
  seletPartner,
}: {
  selectedPartner: AdminShipOrder | undefined;
  seletPartner: (shipper: string) => void;
}) => {
  const { data, status } = useGetAllDeliveryParteners();

  return (
    <VStack
      w="100%"
      align="start"
      maxH={{ base: "100%", md: 300 }}
      overflowY="scroll"
    >
      <FormLabel
        m={0}
        fontSize="xs"
        children="Select Partner"
        color="primary.800"
      />
      {status === "pending" && <DeliveryPartnerSkeletonGrid />}
      {status === "success" && data.length === 0 && (
        <Tag
          alignSelf="center"
          children={
            <>
              <TagLeftIcon>
                <Icon as={Info} />
              </TagLeftIcon>
              <TagLabel>No Delivery Partners. Add some & assign</TagLabel>
            </>
          }
          colorScheme="blue"
        />
      )}
      {status === "success" &&
        data.map((partner, i) => {
          const isSelectedPartner =
            selectedPartner && selectedPartner.shippingProvider === partner._id;

          return (
            <HStack
              mb={2}
              key={i}
              w="100%"
              p={4}
              bg={isSelectedPartner ? "primary.300" : "primary.100"}
              border={isSelectedPartner ? "1px solid" : "none"}
              borderColor="primary.500"
              borderRadius="xl"
              justify="space-between"
              onClick={() => seletPartner(partner._id || "")}
            >
              <VStack align="start" gap={0}>
                <RText
                  weight="bold"
                  text={partner.serviceProvider}
                  color="primary.800"
                />
                <RText text={partner.link} small color="primary.700" />
              </VStack>
              {!isSelectedPartner && (
                <DeleteDeliverPartnerAlert partner={partner} />
              )}
            </HStack>
          );
        })}
    </VStack>
  );
};

export default DeliverPartnersStack;
