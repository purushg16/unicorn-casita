import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import useImageStore from "../../../store/admin/imageStore";
import { useAddProduct } from "../../../hooks/admin/useProduct";
import cloudinaryUpload from "../../../functions/cloudinaryUpload";
import { useRef, useState } from "react";
import useProductSubmission from "../../../hooks/admin/useProductSubmission";

const AddProductSubmitButton = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const product = useProductEntryStore((s) => s.product);
  const resetEntry = useProductEntryStore((s) => s.resetEntry);
  const images = useImageStore((s) => s.images);

  const handleSuccess = () => {
    resetEntry();
    setLoading(false);
    onClose();
  };

  const handleFailure = () => {
    setLoading(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    cloudinaryUpload(images.map((img) => img.image)).then((res) =>
      mutate({ ...product!, imageLink: res.map((r) => r?.secure_url || "") })
    );
  };

  const { mutate } = useAddProduct(handleSuccess, handleFailure);

  return (
    <>
      <Button
        size={{ base: "sm", md: "md" }}
        variant="primary"
        isDisabled={useProductSubmission()}
        onClick={onOpen}
      >
        Add Product
      </Button>
      <AlertDialog
        isCentered
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              color="primary.800"
            >
              Add New Product?
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? Check whether the details are fair & Click "Proceed"
              to create a new product.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                variant="ghost"
                colorScheme="primary"
                onClick={onClose}
                mr={4}
              >
                Review
              </Button>
              <Button
                size={{ base: "sm", md: "md" }}
                variant="primary"
                isLoading={isLoading}
                onClick={handleSubmit}
              >
                Add Product
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AddProductSubmitButton;
