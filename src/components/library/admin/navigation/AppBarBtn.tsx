import { Box, Icon } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  icon: LucideIcon;
  route: string;
}

const AppBarBtn = ({ route, icon }: Props) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname.split("/")[2];

  return (
    <Box
      lineHeight={0}
      p={2}
      bg={pathname === route ? "white" : "none"}
      boxShadow={pathname === route ? "md" : "none"}
      transition="all 0.7s"
      borderRadius={10}
    >
      <Icon as={icon} onClick={() => navigate(`/admin/${route}`)} />
    </Box>
  );
};

export default AppBarBtn;
