import { Button, Icon } from "@chakra-ui/react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ small }: { small?: boolean }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/adminLogin");
  };

  return (
    <Button
      size={small ? "xs" : "sm"}
      colorScheme="red"
      variant="link"
      w="100%"
      justifyContent="space-between"
      rightIcon={<Icon as={LogOut} />}
      onClick={handleClick}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
