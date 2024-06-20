import { Text, VStack } from "@chakra-ui/react";
import AnimateMove from "../../../../motions/Move";
import LabelledInput from "../../../../Utilities/LabelledInput";
import { useState } from "react";
import { useSearchProduct } from "../../../../hooks/user/useProduct";
import SearchedProductsGrid from "./SearchedProducts";
import ProductsLoadingIndicator from "./ProductsLoadingIndicator";

const ProductSearchResultModal = ({ isOpen }: { isOpen: boolean }) => {
  const [q, setQ] = useState<string>("");

  const { data, status, fetchStatus } = useSearchProduct(q);

  if (isOpen)
    return (
      <AnimateMove fullWidth>
        <VStack w="100%" py={4}>
          <LabelledInput
            label="Search"
            placeholder="Search..."
            value={q}
            onTextChange={setQ}
          />
        </VStack>

        {q && (status === "pending" || fetchStatus === "fetching") && (
          <ProductsLoadingIndicator />
        )}

        {status === "success" && fetchStatus === "idle" && (
          <VStack
            w="100%"
            align={data.length === 0 ? "center" : "start"}
            gap={4}
            mt={4}
          >
            <Text fontWeight="semibold" alignSelf="start">
              {" "}
              Search Results{" "}
            </Text>
            <SearchedProductsGrid products={data} />
          </VStack>
        )}
      </AnimateMove>
    );
};

export default ProductSearchResultModal;
