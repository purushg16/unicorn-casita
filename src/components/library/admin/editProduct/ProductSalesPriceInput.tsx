import LabelledInput from "../../../Utilities/LabelledInput";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const ProductSalesPriceInput = ({ editMode }: { editMode: boolean }) => {
  const product = useProductEntryStore((s) => s.product);
  const setPrice = useProductEntryStore((s) => s.setSalesPrice);
  return (
    <LabelledInput
      isDisabled={!editMode}
      label="Sales Price"
      value={product?.salesPrice || parseInt("")}
      onNumberChange={setPrice}
      type="number"
    />
  );
};

export default ProductSalesPriceInput;
