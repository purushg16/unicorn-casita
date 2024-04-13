import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/react";
import { CornerUpRight } from "lucide-react";

const BreadCrumbsTile = ({ crumbs }: { crumbs: string[] }) => {
  const length = crumbs.length;

  return (
    <Breadcrumb
      lineHeight="normal"
      spacing="8px"
      separator={
        <Icon as={CornerUpRight} color="gray.500" lineHeight="normal" />
      }
    >
      {crumbs.map((crumb, index) => (
        <BreadcrumbItem key={index} isCurrentPage={index + 1 === length}>
          <BreadcrumbLink
            alignItems="end"
            href={"/" + crumb.toLowerCase()}
            textTransform="capitalize"
            color={index + 1 === length ? "gray" : "black"}
          >
            {crumb}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbsTile;
