import {
  Box,
  Button,
  Flex,
  HStack,
  Highlight,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LabelledInput from "../../Utilities/LabelledInput";
import { RHeading } from "../../Utilities/Typography";
import { Info } from "lucide-react";
import { useAdminLogin } from "../../hooks/admin/useAdminAuth";

const AdminLoginPage = () => {
  const { mutate, isPending } = useAdminLogin();

  const [userId, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  if (localStorage.getItem("token")) return <Navigate to="/admin" />;
  return (
    <Flex w="100%" h="100svh" align="center" justify="center">
      <Box
        w={{ base: "85%", md: 400 }}
        px={12}
        pos="relative"
        bg="primary.50"
        py={12}
        borderRadius={20}
        boxShadow="md"
      >
        <VStack mx="auto" w="100%" h="100%" justify="center" gap={8}>
          <RHeading text="Welcome Back" color="primary.600" />
          <VStack w="100%" gap={4}>
            <LabelledInput
              label="Username"
              value={userId}
              onTextChange={setUsername}
            />
            <LabelledInput
              label="Password"
              value={password}
              onTextChange={setPassword}
              type="password"
            />
          </VStack>
          <Button
            variant="primary"
            mb={4}
            isDisabled={!userId || !password}
            onClick={() => mutate({ userId, password })}
            isLoading={isPending}
          >
            Login
          </Button>

          <Link target="_blank" to="http://macdasy.com">
            <HStack
              p={2}
              borderRadius={10}
              bg="primary.100"
              color="primary.700"
              gap={0}
            >
              <Icon as={Info} mr={2} />
              <Text fontSize="xs">
                <Highlight
                  query="Macdasy"
                  styles={{ fontWeight: "bold", color: "primary.700" }}
                  children="If you forgot or missed your password, contact Macdasy"
                />
              </Text>
            </HStack>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AdminLoginPage;
