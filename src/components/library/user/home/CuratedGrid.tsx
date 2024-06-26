import { Box, Button, Icon, Show, SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../../Utilities/Typography";
import CategoryCard from "./CategoryCard";
import useGetAllCategories from "../../../hooks/user/useCategories";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import UserCategorySkeleton from "../../../Utilities/Skeletons/UserCategorySkeleton";

const CuratedGrid = () => {
  const { data: categories, status } = useGetAllCategories();

  return (
    <VStack gap={12} px={4} py={0} mt={20}>
      <VStack gap={0}>
        <RHeading text="Curated Picks" small />
        <RText small text="Shop by our valuable categories" />
      </VStack>
      {status === "pending" && (
        <Box w={{ base: "90%", md: "80%" }}>
          <UserCategorySkeleton landing />
        </Box>
      )}

      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 3 }}
        spacing={{ base: 4, md: 8 }}
        w={{ base: "90%", md: "80%" }}
      >
        {status === "success" && (
          <>
            {categories.slice(0, 5).map((cat) => (
              <CategoryCard key={cat._id} category={cat} />
            ))}
            <VStack
              w="100%"
              h="100%"
              bg="#ffecef"
              color="#ED67C5"
              borderRadius="xl"
              p={4}
              justify="space-between"
              border="1px solid"
              borderColor="primary.200"
            >
              <VStack
                align="start"
                gap={2}
                alignSelf="start"
                maxW={{ base: "100%", md: "80%" }}
              >
                <Show below="md">
                  <RText weight="bold" text="View all Categories" />
                </Show>
                <Show above="md">
                  <RHeading small text="View all Categories" />
                </Show>
                <RText
                  small
                  text="We have made the best that fits for everyone of you out there!"
                />
              </VStack>
              <Link to="categories" style={{ alignSelf: "end" }}>
                <Button
                  variant="text"
                  rightIcon={<Icon as={ArrowUpRight} />}
                  size={{ base: "sm", md: "md" }}
                >
                  View all
                </Button>
              </Link>
            </VStack>
          </>
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default CuratedGrid;
