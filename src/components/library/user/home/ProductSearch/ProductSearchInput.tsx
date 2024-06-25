import { Icon } from "@chakra-ui/react";
import { Search } from "lucide-react";

const ProductSearchInput = ({ onClick }: { onClick: () => void }) => {
  return (
    <Icon
      cursor="pointer"
      as={Search}
      boxSize={5}
      strokeWidth={2}
      color="black"
      onClick={onClick}
    />
  );
};

export default ProductSearchInput;
