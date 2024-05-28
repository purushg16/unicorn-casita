import { SimpleGrid, Skeleton } from "@chakra-ui/react";

const UserCategorySkeleton = ({ landing = false }: { landing?: boolean }) => {
  const columns = landing
    ? { base: 2, md: 2, lg: 3 }
    : { base: 2, md: 3, lg: 4 };
  const spacing = landing ? { base: 4, md: 8 } : 4;

  return (
    <SimpleGrid w="100%" my={4} columns={columns} spacing={spacing}>
      {Array.from({ length: landing ? 6 : 4 }).map((_a, i) => (
        <Skeleton
          key={i}
          startColor="primary.100"
          endColor="primary.300"
          w="100%"
          minH={180}
          px={{ base: 4, md: 8 }}
          py={4}
          aspectRatio="4/3"
          borderRadius={10}
        />
      ))}
    </SimpleGrid>
  );
};

export default UserCategorySkeleton;
