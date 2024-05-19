import { Navigate, useParams } from "react-router-dom";
import mockProducts from "../../mocks/mockProducts";
import { useState } from "react";
import useImageStore from "../../store/admin/imageStore";
import useProductEntryStore from "../../store/admin/productEntryStore";
import { HStack, VStack } from "@chakra-ui/react";
import { RText } from "../../Utilities/Typography";
import EnterEditButton from "../../library/admin/editProduct/EnterEditButton";
import ExitEditButton from "../../library/admin/editProduct/ExitEditButton";
import ResetButton from "../../library/admin/editProduct/ResetButton";
import ImagesPreviewGrid from "../../Utilities/ImagesPreviewGrid";
import NewImageUploader from "../../library/admin/editProduct/NewImageUploader";
import ProductNameInput from "../../library/admin/editProduct/ProductNameInput";
import ProductPriceInput from "../../library/admin/editProduct/ProductPriceInput";
import RetriveImageButton from "../../library/admin/editProduct/RetriveImageButton";
import EditModeAlert from "../../library/admin/editProduct/EditModeAlert";

const AdminSingleProductPage = () => {
  const productId = useParams().id;
  const product = mockProducts.find((pr) => pr._id === productId);

  const resetEntry = useProductEntryStore((s) => s.resetEntry);
  const removeImage = useProductEntryStore((s) => s.removeImage);

  const images = useImageStore((s) => s.images);
  const clearImages = useImageStore((s) => s.clearImages);

  const [editMode, toggleEditMode] = useState<boolean>(false);

  const resetState = () => {
    clearImages();
    resetEntry();
  };

  const exitEditMode = () => {
    toggleEditMode(false);
    resetState();
  };

  if (!product) <Navigate to="/admin/products" />;
  if (product)
    return (
      <VStack gap={8} w="100%">
        <HStack justify="space-between" w="100%">
          <VStack align="start" gap={0}>
            <RText text="Product Details" weight="bold" />
            {editMode && <EditModeAlert />}
          </VStack>

          {!editMode && <EnterEditButton onClick={toggleEditMode} />}
          {editMode && (
            <HStack>
              <ResetButton reset={resetState} />
              <ExitEditButton onClick={exitEditMode} />
            </HStack>
          )}
        </HStack>
        <VStack gap={6} w="100%">
          <ProductNameInput editMode={editMode} />
          <ProductPriceInput editMode={editMode} />

          <VStack w="100%" align="start" color="primary.600">
            {editMode && (
              <NewImageUploader
                limit={4 - (images.length + product.imageLink.length)}
              />
            )}

            {product.imageLink.length > 0 ? (
              <ImagesPreviewGrid
                title={editMode ? "Pre-Uploaded Images" : "Images"}
                images={product.imageLink}
                onDelete={editMode ? removeImage : undefined}
                viewOnly={!editMode}
              />
            ) : (
              <RetriveImageButton />
            )}
          </VStack>
        </VStack>
      </VStack>
    );
};

export default AdminSingleProductPage;
