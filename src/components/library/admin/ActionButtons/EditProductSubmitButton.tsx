import { Button, useDisclosure } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useEditProduct } from "../../../hooks/admin/useProduct";
import useImageStore from "../../../store/admin/imageStore";
import cloudinaryUpload from "../../../functions/cloudinaryUpload";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const EditProductSubmitButton = ({ exitEdit }: { exitEdit: () => void }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const product = useProductEntryStore((s) => s.product);
  const images = useImageStore((s) => s.images);

  const { mutate } = useEditProduct(() => {
    onClose();
    exitEdit();
  });

  const handleSubmit = () => {
    setLoading(true);
    cloudinaryUpload(images.map((img) => img.image)).then((res) => {
      mutate({
        ...product,
        productId: product?._id || "",
        imageLink: res.map((r) => r?.secure_url || ""),
      });
      setLoading(false);
    });
  };

  return (
    <>
      <Button variant="primary" onClick={onOpen}>
        Save Changes
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader
            fontSize="lg"
            fontWeight="bold"
            color="primary.800"
          >
            Update Changes?
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? Check whether the details are fair & Click "Confirm"
            to create a update changes.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onClose}
              variant="ghost"
              colorScheme="primary"
            >
              Review
            </Button>
            <Button
              variant="primary"
              ml={4}
              isLoading={isLoading}
              onClick={handleSubmit}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EditProductSubmitButton;
