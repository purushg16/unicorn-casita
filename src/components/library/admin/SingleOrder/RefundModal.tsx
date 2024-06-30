import {
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import LabelledInput from "../../../Utilities/LabelledInput";
import { RHeading } from "../../../Utilities/Typography";
import { Order } from "../../../entities/order";
import { useInitiateRefund } from "../../../hooks/admin/useRefund";

type refundOption = "full" | "partial" | "no-refund";

const RefundModal = ({ order }: { order: Order }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [paymentOption, setOption] = useState<refundOption>("full");
  const [amount, setAmount] = useState<number>(order.totalBill);

  const handleSuccess = () => {
    setOption("full");
    setAmount(0);
    onClose();
  };

  const { mutate, isPending } = useInitiateRefund(handleSuccess);

  return (
    <>
      <Button
        onClick={onOpen}
        variant="white"
        size="sm"
        isDisabled={order.orderStatus === "cancelled"}
      >
        {order.orderStatus === "completed" ? "Initiate Refund" : "Cancel Order"}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalHeader>
            <VStack align="start">
              <RHeading color="primary.800" small text="Initiate Refund" />
              <Tag size="sm" colorScheme="green">
                Total Amount paid: Rs.{order.totalBill.toFixed(2)}
              </Tag>
            </VStack>
          </ModalHeader>
          <ModalBody my={4}>
            <VStack w="100%" gap={8} align="start">
              <VStack align="start" w="100%">
                <FormLabel fontSize="xs" color="primary.800" m={0}>
                  Refund Method
                </FormLabel>
                <RadioGroup
                  colorScheme="primary"
                  onChange={(value) => setOption(value as refundOption)}
                  value={paymentOption}
                  bg="primary.100"
                  p={4}
                  py={2}
                  borderRadius="xl"
                >
                  <Stack direction="row" gap={4}>
                    <Radio value="full"> Full </Radio>
                    <Radio value="partial"> Partial</Radio>
                    {order.orderStatus !== "completed" && (
                      <Radio value="no-refund"> No Refund </Radio>
                    )}
                  </Stack>
                </RadioGroup>
              </VStack>
              <LabelledInput
                label="Refund Amount"
                type="number"
                value={amount}
                onNumberChange={(value) => {
                  if (value < order.totalBill) setAmount(value);
                }}
                isDisabled={paymentOption !== "partial"}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="primary" onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={isPending}
              variant="primary"
              ml={4}
              onClick={() =>
                mutate({
                  mongooseOrderId: order._id || "",
                  refundOption: paymentOption,
                  partialAmount: amount,
                })
              }
            >
              Initiate Refund
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RefundModal;
