import { Flex, SimpleGrid } from "@chakra-ui/react";
import BreadCrumbsTile from "../../library/user/BreadCrumbsTile";
import { RHeading } from "../../Utilities/Typography";
import CategoryCard from "../../library/user/home/CategoryCard";

const CategoriesPage = () => {
  return (
    <Flex gap={12} flexDir="column">
      <BreadCrumbsTile crumbs={["home", "collections"]} />
      <Flex gap={4} flexDir="column">
        <RHeading small text="All Categories" />

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
          <CategoryCard
            label="lorem ipsum"
            img="https://plus.unsplash.com/premium_photo-1678834778167-5b2172bccb6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CategoryCard
            label="lorem ipsum"
            img="https://plus.unsplash.com/premium_photo-1678834778167-5b2172bccb6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CategoryCard
            label="lorem ipsum"
            img="https://plus.unsplash.com/premium_photo-1678834778167-5b2172bccb6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CategoryCard
            label="lorem ipsum"
            img="https://plus.unsplash.com/premium_photo-1678834778167-5b2172bccb6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default CategoriesPage;
