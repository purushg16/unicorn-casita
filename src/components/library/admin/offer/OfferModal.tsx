import {
  Button,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BadgePercent, X } from "lucide-react";
import LabelledInput from "../../../Utilities/LabelledInput";
import { useState } from "react";
import { useGetOffer, usePostOffer } from "../../../hooks/admin/useOffer";

const OfferModal = () => {
  const [offers, setOffer] = useState<string>("");
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleClose = () => {
    setOffer("");
    onClose();
  };

  const { data, isLoading, isFetching } = useGetOffer();
  const { mutate, isPending } = usePostOffer(() => setOffer(""));

  return (
    <>
      <Button
        variant={isOpen ? "primary" : "ghost"}
        colorScheme="primary"
        w="100%"
        justifyContent="start"
        leftIcon={<Icon as={BadgePercent} />}
        onClick={onOpen}
        textTransform="capitalize"
      >
        Offers
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="primary.800"> Offer Banner </ModalHeader>
          <ModalBody>
            {(isLoading || isFetching) && (
              <Skeleton
                h="20px"
                w="100%"
                startColor="primary.200"
                endColor="primary.300"
                mb={6}
              />
            )}
            {!isLoading && !isFetching && data && data.data.offers && (
              <HStack
                bg="primary.100"
                w="100%"
                justify="space-between"
                p={2}
                mb={6}
              >
                <Text fontSize="xs" color="primary.800">
                  {data.data.offers}
                </Text>
                <Icon
                  as={X}
                  color="primary.800"
                  cursor="pointer"
                  onClick={() => mutate({ offers: "" })}
                />
              </HStack>
            )}
            <LabelledInput
              label="Offer Text"
              value={offers}
              onTextChange={setOffer}
            />
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button
                colorScheme="primary"
                onClick={handleClose}
                variant="ghost"
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => offers && mutate({ offers })}
                isDisabled={!offers}
                isLoading={isPending}
              >
                Submit
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OfferModal;
