import { FileWithPath } from "react-dropzone";
import CloudinaryResponse from "../entities/cloudinaryResponse";

export default async function cloudinaryUpload(files: FileWithPath[]) {
  const responses = [];

  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vwoc7bmk");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dfpfkbmrt/image/upload/?folder=unicorn",

        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to upload ${file.name}`);
      }

      const responseData =
        (await response.json()) as unknown as CloudinaryResponse;
      responses.push(responseData);
    } catch (error) {
      console.error(error);
      responses.push(undefined);
    }
  }

  return responses;
}
