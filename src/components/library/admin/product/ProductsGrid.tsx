import Product from "../../../entities/product";
import SlideInGrid from "../../../motions/SlideInGrid";
import ProductCard from "../editProduct/ProductCard";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <SlideInGrid>
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </SlideInGrid>
  );
};

export default ProductsGrid;
