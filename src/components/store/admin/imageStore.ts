import { FileWithPath } from "react-dropzone";
import { v4 } from "uuid";
import { create } from "zustand";

export interface UploadedImage {
  id: string;
  image: FileWithPath;
}

interface ImageStore {
  images: UploadedImage[];
  setImages: (images: FileWithPath[]) => void;
  deleteImage: (id: string) => void;
  clearImages: () => void;
}

const useImageStore = create<ImageStore>((set) => ({
  images: [],
  setImages: (images) =>
    set(() => ({
      images: images.map((img) => {
        return { id: v4(), image: img };
      }),
    })),
  deleteImage: (id) =>
    set((store) => ({ images: store.images.filter((img) => img.id !== id) })),
  clearImages: () => set({ images: [] }),
}));

export default useImageStore;
