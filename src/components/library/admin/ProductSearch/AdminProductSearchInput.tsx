import { Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AdminProductResults from "./AdminProductResults";
import { useAmdinSearchProduct } from "../../../hooks/admin/useProduct";

const AdminProductSearchInput = () => {
  const [value, setValue] = useState<string>("");

  const { data, status, fetchStatus } = useAmdinSearchProduct(value);

  return (
    <VStack pos="relative" w={{ base: 250, md: 300 }}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="flushed"
        size="sm"
        placeholder="Search Products..."
        colorScheme="primary"
      />
      {data &&
        data.length > 0 &&
        status === "success" &&
        fetchStatus === "idle" && <AdminProductResults products={data} />}
    </VStack>
  );
};

export default AdminProductSearchInput;
