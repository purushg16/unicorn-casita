import { Box, FormLabel, SimpleGrid, VStack } from "@chakra-ui/react";
import { UploadedImage } from "../store/admin/imageStore";
import ImagePreviewCard from "./ImagePreviewCard";
import { Label } from "./Typography";

interface Props {
  title: string;
  images: UploadedImage[] | string[];
  onDelete?: (id: string) => void;
  viewOnly?: boolean;
}

const ImagesPreviewGrid = ({
  title,
  images,
  viewOnly = true,
  onDelete,
}: Props) => {
  return (
    <VStack w="100%" align="start">
      <FormLabel fontSize="xs" m={0} color="primary.800">
        {title}
      </FormLabel>
      <VStack
        align="start"
        p={4}
        w="100%"
        borderRadius={10}
        bg="primary.50"
        border="1px solid"
        borderColor="primary.100"
        maxH="100%"
      >
        {images.length > 0 ? (
          <SimpleGrid
            columns={{ base: 2, md: 3 }}
            spacing={4}
            w="100%"
            maxH="100%"
            overflowY="scroll"
          >
            {images.map((img, i) => (
              <ImagePreviewCard
                viewOnly={viewOnly}
                img={img}
                key={i}
                onDelete={onDelete}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Box w="100%" textAlign="center">
            <Label
              text="No images uploaded"
              textTransform="uppercase"
              small
              color="primary.400"
            />
          </Box>
        )}
      </VStack>
    </VStack>
  );
};

export default ImagesPreviewGrid;
