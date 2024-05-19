import LabelledInput from "../../../Utilities/LabelledInput";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const ProductPriceInput = ({ editMode }: { editMode: boolean }) => {
  const product = useProductEntryStore((s) => s.product);
  const setPrice = useProductEntryStore((s) => s.setMrp);

  if (product)
    return (
      <LabelledInput
        isDisabled={!editMode}
        label="MRP"
        value={product.mrp}
        onNumberChange={setPrice}
        type="number"
      />
    );
};

export default ProductPriceInput;
