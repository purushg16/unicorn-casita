import { Flex, HStack, Show, SimpleGrid, Spacer } from "@chakra-ui/react";
import BreadCrumbsTile from "../../library/user/BreadCrumbsTile";
import ProductCard from "../../library/user/Product/ProductCard";
import { Label, RHeading } from "../../Utilities/Typography";
import SortByMenu from "../../library/user/SortByMenu";

const CollectionsPage = () => {
  return (
    <Flex gap={12} flexDir="column">
      <BreadCrumbsTile crumbs={["home", "collections", "Collections 001"]} />
      <Flex gap={4} flexDir="column">
        <Flex align="center">
          <RHeading small text="Collections 001" />
          <Spacer />
          <Show above="md">
            <HStack gap={4} align="center">
              <Label text="Sort By:" nowrap />
              <SortByMenu />
            </HStack>
          </Show>
        </Flex>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default CollectionsPage;
