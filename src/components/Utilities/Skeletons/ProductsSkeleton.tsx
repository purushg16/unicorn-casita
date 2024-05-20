import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsSkeleton = () => {
  return Array.from({ length: 6 }).map((_a, i) => (
    <ProductCardSkeleton key={i} />
  ));
};

export default ProductsSkeleton;
