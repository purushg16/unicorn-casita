import {
  Button,
  Divider,
  HStack,
  Icon,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BadgePlus } from "lucide-react";
import AdminGridCover from "../../Utilities/AdminGridCover";
import { RHeading } from "../../Utilities/Typography";
import ProductCard from "../../library/admin/editProduct/ProductCard";
import mockProducts from "../../mocks/mockProducts";
import SingleProductModal from "../../library/admin/editProduct/SingleProductModal";
import useProductEntryStore from "../../store/admin/productEntryStore";
import Product from "../../entities/product";

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
        <Button
          size="sm"
          colorScheme="primary"
          leftIcon={<Icon as={BadgePlus} />}
        >
          New Product
        </Button>
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
