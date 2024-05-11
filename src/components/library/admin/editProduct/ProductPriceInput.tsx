import LabelledInput from "../../../Utilities/LabelledInput";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const ProductPriceInput = ({ editMode }: { editMode: boolean }) => {
  const product = useProductEntryStore((s) => s.product);
  const setPrice = useProductEntryStore((s) => s.setPrice);

  if (product)
    return (
      <LabelledInput
        isDisabled={!editMode}
        label="Price"
        value={product.price}
        onNumberChange={setPrice}
        type="number"
      />
    );
};

export default ProductPriceInput;
