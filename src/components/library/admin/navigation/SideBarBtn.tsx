import { Button, Icon } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const SideBarBtn = ({ label, icon }: { label: string; icon: LucideIcon }) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname.split("/")[2];

  return (
    <Button
      variant={label === pathname ? "primary" : "ghost"}
      colorScheme="primary"
      w="100%"
      justifyContent="start"
      leftIcon={<Icon as={icon} />}
      onClick={() => navigate("/admin/" + label)}
      textTransform="capitalize"
    >
      {label}
    </Button>
  );
};

export default SideBarBtn;
