import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
} from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import Specification from "../../../entities/specification";

const SpecificationsTable = ({
  specifications,
}: {
  specifications: Specification[];
}) => {
  if (specifications.length === 0) return null;
  return (
    <VStack w="100%" gap={4} align="start">
      <RText color="primary.700" text="Specifications" small />
      <TableContainer w="100%">
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th color="primary.500"> Specification </Th>
              <Th color="primary.500"> Details </Th>
            </Tr>
          </Thead>
          <Tbody>
            {specifications.map((spec) => (
              <Tr key={spec.id}>
                <Td fontWeight="semibold" textTransform="capitalize">
                  {spec.key}
                </Td>
                <Td textTransform="capitalize"> {spec.value} </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default SpecificationsTable;
