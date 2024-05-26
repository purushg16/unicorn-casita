import { Highlight, Icon, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { Ban, PlaneTakeoff } from "lucide-react";
import { useGetAllDeliveryParteners } from "../../../hooks/admin/useDeliveryPartner";

const ShippedTag = ({
  success,
  partnerName,
}: {
  success: boolean;
  partnerName?: string;
}) => {
  const { data: partners, isLoading } = useGetAllDeliveryParteners(
    !!partnerName
  );
  const providerName = partners?.find(
    (p) => p._id === partnerName
  )?.serviceProvider;
  return (
    <Tag colorScheme={success ? "green" : "red"} variant="outline">
      <TagLeftIcon>
        <Icon as={success ? PlaneTakeoff : Ban} />
      </TagLeftIcon>
      <TagLabel fontSize="xs">
        <Highlight
          query={providerName || ""}
          styles={{ fontWeight: "bold", color: "green", pr: 1 }}
        >
          {success
            ? isLoading
              ? ""
              : `${
                  partners?.find((p) => p._id === partnerName)?.serviceProvider
                } has been assigned for this delivery`
            : "No shipping partner assigned. Click here to assign"}
        </Highlight>
      </TagLabel>
    </Tag>
  );
};

export default ShippedTag;
