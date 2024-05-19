import { UseToastOptions } from "@chakra-ui/react";

export default function Toaster(
  status: "success" | "error",
  title?: string,
  defualtError?: boolean
) {
  return {
    title:
      defualtError && status === "error"
        ? "Something went wrong, Try again Later!"
        : title,
    duration: 2000,
    position: "top",
    status: status,
  } as UseToastOptions;
}
