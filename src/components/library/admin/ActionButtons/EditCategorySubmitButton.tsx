import {
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useEditCategory } from "../../../hooks/admin/useCategory";
import Category from "../../../entities/category";
import useImageStore from "../../../store/admin/imageStore";
import cloudinaryUpload from "../../../functions/cloudinaryUpload";

const EditCategorySubmitButton = ({
  category,
  isDisabled,
}: {
  category: Category;
  isDisabled: boolean;
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const images = useImageStore((s) => s.images);

  const { mutate } = useEditCategory(() => {
    onClose();
    setLoading(false);
  });

  const onSubmit = () => {
    setLoading(true);
    if (images.length > 0)
      cloudinaryUpload(images.map((i) => i.image)).then((res) =>
        mutate({
          categoryId: category._id!,
          imageLink: res[0]?.secure_url || "",
          name: category.name,
        })
      );
    else
      mutate({
        categoryId: category._id!,
        imageLink: category.imageLink,
        name: category.name,
      });
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={onOpen}
        isDisabled={
          isDisabled ||
          (category.imageLink === ""
            ? images.length !== 1
            : category.imageLink === "")
        }
      >
        Update Changes
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
              onClick={onSubmit}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EditCategorySubmitButton;
