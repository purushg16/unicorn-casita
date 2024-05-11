import { FormLabel, Highlight, VStack } from "@chakra-ui/react";
import useImageStore from "../store/admin/imageStore";
import Uploader from "./Uploader/Uploader";

const ImageUploader = ({
  limit,
  title,
  small,
  isDisabled = false,
}: {
  limit: number;
  title: string;
  small?: boolean;
  isDisabled?: boolean;
}) => {
  const setImages = useImageStore((s) => s.setImages);

  return (
    <VStack align="start" w="100%" h="100%">
      <FormLabel fontSize={small ? "xs" : "md"} color="primary.600">
        <Highlight
          query={limit === 0 ? `(Limit Reached)` : `(max. ${limit} image(s))`}
          styles={{
            fontSize: "xs",
            fontStyle: "italic",
            color: "primary.600",
            px: 2,
          }}
        >
          {limit === 0
            ? `${title}(Limit Reached)`
            : `${title}(max. ${limit} image(s))`}
        </Highlight>
      </FormLabel>

      <Uploader isDisabled={isDisabled} limit={limit} callback={setImages} />
    </VStack>
  );
};

export default ImageUploader;
