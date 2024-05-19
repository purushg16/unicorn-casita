import { UseToastOptions } from "@chakra-ui/react";

export default function Toaster(status: "success" | "error", title?: string) {
  return {
    title: title,
    duration: 2000,
    position: "top",
    status: status,
  } as UseToastOptions;
}
