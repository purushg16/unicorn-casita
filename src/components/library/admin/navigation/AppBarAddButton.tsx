import { Button, Icon } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import AnimateMove from "../../../motions/Move";
import { useNavigate } from "react-router-dom";

interface Props {
  icon: LucideIcon;
  title: string;
  delay?: number;
}

const AppBarAddButton = ({ icon, title, delay = 0 }: Props) => {
  const link =
    title === "product"
      ? "products"
      : title === "category"
      ? "categories"
      : "reviews";

  const navigate = useNavigate();
  const handleClick = async () => {
    await navigate(`/admin/${link}`);
    (document.querySelector(`#new-${title}-btn`) as HTMLButtonElement).click();
  };

  return (
    <AnimateMove delay={delay}>
      <Button
        color="primary.700"
        variant="text"
        leftIcon={<Icon as={icon} />}
        justifyContent="start"
        textTransform="capitalize"
        onClick={handleClick}
      >
        New {title}
      </Button>
    </AnimateMove>
  );
};

export default AppBarAddButton;
