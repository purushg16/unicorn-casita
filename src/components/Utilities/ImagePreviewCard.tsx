import { Box, Icon, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "lucide-react";
import { UploadedImage } from "../store/admin/imageStore";

interface Props {
  img: UploadedImage | string;
  viewOnly: boolean;
  onDelete?: (id: string) => void;
}

const ImagePreviewCard = ({ img, onDelete, viewOnly }: Props) => {
  const isString = typeof img === "string";
  const imgUrl = isString ? img : URL.createObjectURL(img.image);

  return (
    <Box
      w="100%"
      minH={150}
      pos="relative"
      bg="primary.100"
      borderRadius={10}
      bgImg={imgUrl}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      overflow="clip"
    >
      {!viewOnly && (
        <IconButton
          onClick={() =>
            onDelete &&
            !viewOnly &&
            (isString ? onDelete(img) : onDelete(img.id))
          }
          size="sm"
          borderRadius={10}
          aria-label="del-img"
          icon={<Icon as={DeleteIcon} />}
          pos="absolute"
          right={2}
          top={2}
          bg="red.200"
          _hover={{ bg: "red.300" }}
          boxShadow="8px -2px 20px 15px #3e3e3e3b"
        />
      )}
    </Box>
  );
};

export default ImagePreviewCard;
