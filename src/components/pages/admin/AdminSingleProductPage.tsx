import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import useImageStore from "../../store/admin/imageStore";
import useProductEntryStore from "../../store/admin/productEntryStore";
import { Button, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import EnterEditButton from "../../library/admin/editProduct/EnterEditButton";
import ExitEditButton from "../../library/admin/editProduct/ExitEditButton";
import ResetButton from "../../library/admin/editProduct/ResetButton";
import ImagesPreviewGrid from "../../Utilities/ImagesPreviewGrid";
import NewImageUploader from "../../library/admin/editProduct/NewImageUploader";
import ProductNameInput from "../../library/admin/editProduct/ProductNameInput";
import ProductPriceInput from "../../library/admin/editProduct/ProductPriceInput";
import RetriveImageButton from "../../library/admin/editProduct/RetriveImageButton";
import EditModeAlert from "../../library/admin/editProduct/EditModeAlert";
import { useGetSingleProduct } from "../../hooks/admin/useProduct";
import DescriptionInput from "../../library/admin/addProduct/DescriptionInput";
import StockSelector from "../../library/admin/addProduct/StockSelector";
import CategorySelector from "../../library/admin/addProduct/CategorySelector";
import AttributeSelector from "../../library/admin/addProduct/AttributeSelector";
import SpecificationsTable from "../../library/admin/addProduct/SpecificationsTable";
import EditProductSubmitButton from "../../library/admin/ActionButtons/EditProductSubmitButton";

const AdminSingleProductPage = () => {
  const productId = useParams().id;
  const product = useGetSingleProduct(productId!, !!productId).data!;

  const productImages = useProductEntryStore((s) => s.product)?.imageLink;
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
        <HStack w="100%" justify="space-between">
          <VStack align="start" gap={0}>
            <RHeading text={product.name} color="black" small />
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
          <DescriptionInput editMode={editMode} />
          <SimpleGrid columns={{ base: 1, md: 3 }} w="100%" spacing={12}>
            <ProductPriceInput editMode={editMode} />
            <StockSelector editMode={editMode} />
            <CategorySelector editMode={editMode} category={product.category} />
          </SimpleGrid>
          <AttributeSelector editMode={editMode} />
          <SpecificationsTable editMode={editMode} />

          <VStack w="100%" align="start" color="primary.600" gap={8}>
            {!editMode && (
              <ImagesPreviewGrid
                title="Images"
                images={product.imageLink}
                viewOnly
              />
            )}
            {editMode && (
              <>
                <NewImageUploader
                  limit={4 - (images.length + product.imageLink.length)}
                />

                {productImages?.length && productImages?.length > 0 ? (
                  <ImagesPreviewGrid
                    title="Pre-Uploaded Images"
                    images={productImages!}
                    onDelete={editMode ? removeImage : undefined}
                    viewOnly={!editMode}
                  />
                ) : (
                  product.imageLink.length !== 0 && <RetriveImageButton />
                )}
              </>
            )}
          </VStack>
        </VStack>
        {editMode && (
          <HStack>
            <Button
              variant="secondary"
              size={{ base: "sm", md: "md" }}
              onClick={exitEditMode}
            >
              Cancel
            </Button>
            <EditProductSubmitButton exitEdit={exitEditMode} />
          </HStack>
        )}
      </VStack>
    );
};

export default AdminSingleProductPage;
