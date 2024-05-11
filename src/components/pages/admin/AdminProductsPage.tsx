import { Divider, HStack, VStack, useDisclosure } from "@chakra-ui/react";
import AdminGridCover from "../../Utilities/AdminGridCover";
import { RHeading } from "../../Utilities/Typography";
import Product from "../../entities/product";
import AddProductModal from "../../library/admin/addProduct/AddProductModal";
import ProductCard from "../../library/admin/editProduct/ProductCard";
import SingleProductModal from "../../library/admin/editProduct/SingleProductModal";
import mockProducts from "../../mocks/mockProducts";
import useProductEntryStore from "../../store/admin/productEntryStore";

const AdminProductsPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const product = useProductEntryStore((s) => s.product);
  const appendProductEntry = useProductEntryStore((s) => s.appendNewEntry);

  const handleClick = (product: Product) => {
    appendProductEntry(product);
  };

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Products" color="primary.700" small />
        <AddProductModal />
      </HStack>
      <Divider my={4} />
      <AdminGridCover>
        {mockProducts.map((product, i) => (
          <ProductCard
            product={product}
            key={i}
            onClick={() => {
              onOpen();
              handleClick(product);
            }}
          />
        ))}
      </AdminGridCover>
      {product && <SingleProductModal isOpen={isOpen} onClose={onClose} />}
    </VStack>
  );
};

export default AdminProductsPage;
