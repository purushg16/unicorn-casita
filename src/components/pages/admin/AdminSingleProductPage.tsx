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
import OptionsStack from "../../library/admin/editProduct/OptionsStack";
import AdminSingleProductSkeleton from "../../Utilities/Skeletons/AdminSingleProductSkeleton";

const AdminSingleProductPage = () => {
  const productId = useParams().id;
  const {
    data: product,
    status,
    isFetching,
  } = useGetSingleProduct(productId!, !!productId);

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

  console.log(isFetching);
  if (status !== "success" || isFetching || !product)
    return <AdminSingleProductSkeleton />;
  if (!product) <Navigate to="/admin/products" />;
  if (status === "success" && !isFetching && product)
    return (
      <VStack gap={8} w="100%">
        <HStack w="100%" justify="space-between">
          <VStack align="start" gap={0}>
            <RHeading text={product.name} color="primary.800" small />
            {editMode && <EditModeAlert />}
          </VStack>

          {!editMode && (
            <EnterEditButton
              onClick={toggleEditMode}
              isDisabled={status !== "success"}
            />
          )}
          {editMode && (
            <HStack>
              <ResetButton reset={resetState} />
              <ExitEditButton onClick={exitEditMode} />
            </HStack>
          )}
        </HStack>
        <VStack gap={6} w="100%">
          <ProductNameInput editMode={editMode} />
          <OptionsStack editMode={editMode} />
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
                  product.imageLink.length !== 0 && (
                    <RetriveImageButton of="product" />
                  )
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
