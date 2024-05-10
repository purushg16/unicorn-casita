import { FileWithPath, useDropzone } from "react-dropzone";
import { acceptStyle, focusedStyle, rejectStyle } from "./UploadStyle";
import { useMemo } from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { Label } from "../Typography";

interface Props {
  limit?: number;
  isDisabled: boolean;
  callback: (files: FileWithPath[]) => void;
}

const Uploader = ({ isDisabled, callback, limit }: Props) => {
  const toast = useToast();

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: limit ? limit : 5,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDropRejected: (rej) => {
      toast({
        title: rej[0].errors[0].message,
        status: "error",
        duration: 3000,
        position: "top",
      });
    },

    onDrop: async (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles.length > 0 && !isDisabled) callback(acceptedFiles);
    },
  });

  const style = useMemo(
    () => ({
      ...(isFocused && !isDisabled ? focusedStyle : {}),
      ...(isDragAccept && !isDisabled ? acceptStyle : {}),
      ...(isDragReject && !isDisabled ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, isDisabled]
  );

  return (
    <Box
      className="container"
      w="100%"
      opacity={isDisabled ? 0.5 : 1}
      pointerEvents={isDisabled ? "none" : "all"}
    >
      <Flex
        p={4}
        w="100%"
        bg="primary.50"
        align="center"
        justify="center"
        borderRadius={10}
        border="1px dashed"
        borderColor="primary.200"
        {...getRootProps({ style: style as React.CSSProperties })}
      >
        <input {...getInputProps()} disabled={isDisabled} />
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}
        {!isDragActive && (
          <Label color="primary.600" text="Tap or Drag and drop images here" />
        )}
      </Flex>
    </Box>
  );
};

export default Uploader;
