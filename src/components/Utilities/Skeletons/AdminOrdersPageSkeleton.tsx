import {
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Skeleton,
} from "@chakra-ui/react";

const tableHeadings = [
  "order id",
  "customer",
  "order status",
  "payment status",
  "dispatch status",
  "amount",
];

const AdminOrdersPageSkeleton = () => {
  return (
    <TableContainer
      w="100%"
      border="1px solid"
      borderRadius="xl"
      borderColor="primary.200"
    >
      <Table w="100%">
        <Thead bg="primary.200">
          <Tr>
            {tableHeadings.map((th) => (
              <Th key={th} isNumeric={th === "amount"} color="primary.800">
                {th}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody maxH={500} overflowY="scroll">
          {Array.from({ length: 6 }).map((_a, i) => (
            <Tr key={i}>
              {Array.from({ length: 6 }).map((_a, i) => (
                <Td key={i}>
                  <Skeleton
                    w="100%"
                    h="20px"
                    startColor="primary.200"
                    endColor="primary.300"
                  />
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AdminOrdersPageSkeleton;
