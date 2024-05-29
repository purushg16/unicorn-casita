import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BadgePlus } from "lucide-react";
import { useState } from "react";
import LabelledInput from "../../../Utilities/LabelledInput";
import { Label } from "../../../Utilities/Typography";
import { Review } from "../../../entities/review";
import { useAddReview } from "../../../hooks/admin/useAdminReview";

const AddReviewModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stateReview, setStateReview] = useState<Review>({
    company: "",
    name: "",
    rating: parseInt(""),
    shortReview: "",
  });

  const resetState = () => {
    setStateReview({
      company: "",
      name: "",
      rating: parseInt(""),
      shortReview: "",
    });
    onClose();
  };

  const { mutate, isPending } = useAddReview(resetState);
  return (
    <>
      <Button
        id="new-review-btn"
        size="sm"
        variant="primary"
        leftIcon={<Icon as={BadgePlus} />}
        onClick={onOpen}
        zIndex={999}
      >
        New Review
      </Button>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {
          onClose();
          resetState();
        }}
        size={{ base: "full", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            color="primary.700"
            zIndex={99}
            bg="primary.50"
            pos="sticky"
            top={0}
          >
            Add New Review
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={8} align="start">
              <LabelledInput
                label="User Name"
                value={stateReview.name}
                onTextChange={(value) =>
                  setStateReview({ ...stateReview, name: value })
                }
              />
              <LabelledInput
                label="Company Name"
                value={stateReview.company!}
                onTextChange={(value) =>
                  setStateReview({ ...stateReview, company: value })
                }
              />

              <FormControl>
                <Label text="Rating" color="primary.800" small />
                <Input
                  bg="primary.100"
                  color="primary.800"
                  _hover={{ borderColor: "primary.200" }}
                  _focus={{ borderColor: "primary.200" }}
                  _active={{ borderColor: "primary.200" }}
                  _placeholder={{ color: "primary.400" }}
                  variant="filled"
                  borderRadius="xl"
                  placeholder="Rating"
                  type="number"
                  value={stateReview.rating}
                  onChange={(e) => {
                    const ratingNum = parseFloat(e.target.value);
                    const rating = !isNaN(ratingNum)
                      ? ratingNum > 5
                        ? 5
                        : ratingNum <= 0
                        ? 0.5
                        : ratingNum
                      : parseInt("");

                    setStateReview({
                      ...stateReview,
                      rating: parseFloat(rating.toPrecision(2)),
                    });
                  }}
                />
              </FormControl>

              <VStack w="100%" align="start" gap={0}>
                <FormLabel fontSize="xs" color="primary.800">
                  Short Review
                </FormLabel>
                <Textarea
                  value={stateReview.shortReview}
                  onChange={(e) =>
                    setStateReview({
                      ...stateReview,
                      shortReview: e.target.value,
                    })
                  }
                  borderRadius="xl"
                  bg="primary.100"
                  color="primary.800"
                  _hover={{ borderColor: "primary.200" }}
                  _focus={{ borderColor: "primary.200" }}
                  _active={{ borderColor: "primary.200" }}
                  _placeholder={{ color: "primary.400" }}
                  variant="filled"
                  placeholder="Description"
                />
              </VStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={4}
              variant="ghost"
              colorScheme="primary"
              onClick={resetState}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => mutate(stateReview)}
              isLoading={isPending}
              isDisabled={
                isNaN(stateReview.rating) ||
                !stateReview.company ||
                !stateReview.name ||
                !stateReview.shortReview
              }
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddReviewModal;
