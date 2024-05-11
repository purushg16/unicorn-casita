import ImageUploader from "../../../Utilities/ImageUploader";
import ImagesPreviewGrid from "../../../Utilities/ImagesPreviewGrid";
import useImageStore from "../../../store/admin/imageStore";

const NewImageUploader = ({ limit }: { limit: number }) => {
  const images = useImageStore((s) => s.images);
  const deleteImage = useImageStore((s) => s.deleteImage);
  limit = limit >= 0 ? limit : 0;

  return (
    <>
      <ImageUploader
        limit={limit}
        title="Upload Images"
        isDisabled={limit === 0}
      />
      <ImagesPreviewGrid
        title=""
        images={images}
        onDelete={deleteImage}
        viewOnly={false}
      />
    </>
  );
};

export default NewImageUploader;
