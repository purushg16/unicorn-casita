import useImageStore from "../../store/admin/imageStore";
import useProductEntryStore from "../../store/admin/productEntryStore";

const useProductSubmission = () => {
  const product = useProductEntryStore((s) => s.product);
  const images = useImageStore((s) => s.images);

  if (!product) return true;
  if (images.length === 0) return true;

  if (
    !product.name ||
    !product.categoryId ||
    !product.description ||
    !product.mrp ||
    !product.stock
  )
    return true;

  if (!product.isAttribute && (product.salesPrice <= 0 || !product.salesPrice))
    return true;

  if (
    product.isAttribute &&
    (product.attributeName === "" || product.attributes.length === 0)
  )
    return true;

  if (product.specifications && product.specifications.length > 0)
    return product.specifications.some((spec) => !spec.key || !spec.value);

  return false;
};

export default useProductSubmission;
