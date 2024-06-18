import LabelledInput from "../../../Utilities/LabelledInput";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const ProductNameInput = ({ editMode }: { editMode: boolean }) => {
  const product = useProductEntryStore((s) => s.product);
  const setName = useProductEntryStore((s) => s.setName);

  return (
    <LabelledInput
      isDisabled={!editMode}
      label="Product Name"
      value={product?.name || ""}
      onTextChange={setName}
    />
  );
};

export default ProductNameInput;
