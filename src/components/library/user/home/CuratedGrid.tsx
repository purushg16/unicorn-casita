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
    <VStack gap={12} px={{ base: 4, md: 8, lg: 16 }} py={0} mt={20}>
      <VStack gap={0}>
        <RHeading text="Curated Picks" color="primary.700" />
        <RText
          small
          text="Shop by our valuable categories"
          color="primary.700"
        />
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
              bg="primary.100"
              borderRadius="xl"
              p={4}
              justify="space-between"
              border="1px solid"
              borderColor="primary.200"
            >
              <VStack
                align="start"
                gap={0}
                alignSelf="start"
                color="primary.700"
                maxW={{ base: "100%", md: "80%" }}
              >
                <Show below="md">
                  <RText weight="bold" text="View all Categories" />
                </Show>
                <Show above="md">
                  <RHeading small text="View all Categories" />
                  <RText
                    small
                    text="We have made the best that fits for everyone of you out there!"
                  />
                </Show>
              </VStack>
              <Link to="categories" style={{ alignSelf: "end" }}>
                <Button
                  variant="primary"
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
