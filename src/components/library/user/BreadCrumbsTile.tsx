import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "lucide-react";

const BreadCrumbsTile = ({ crumbs }: { crumbs: string[] }) => {
  const length = crumbs.length;

  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {crumbs.map((crumb, index) => (
        <BreadcrumbItem>
          <BreadcrumbLink
            href={"/" + crumb}
            textTransform="capitalize"
            color={index === length ? "gray" : "black"}
            isCurrentPage={index === length}
          >
            {crumb}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbsTile;
