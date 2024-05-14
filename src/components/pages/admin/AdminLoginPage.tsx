import { Box, Button, Flex, Icon, VStack } from "@chakra-ui/react";
import LabelledInput from "../../Utilities/LabelledInput";
import { useState } from "react";
import { RHeading } from "../../Utilities/Typography";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";

const AdminLoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Flex w="100%" h="100svh" align="center" justify="center">
      <Box
        w={{ base: "85%", md: 400 }}
        px={12}
        pos="relative"
        bg="primary.50"
        py={12}
        pb={28}
        borderRadius={20}
        boxShadow="md"
      >
        <VStack mx="auto" w="100%" h="100%" justify="center" gap={8}>
          <RHeading text="Welcome Back" color="primary.600" />
          <VStack w="100%" gap={4}>
            <LabelledInput
              label="Username"
              value={username}
              onTextChange={setUsername}
            />
            <LabelledInput
              label="Password"
              value={password}
              onTextChange={setPassword}
              type="password"
            />
          </VStack>
          <Button colorScheme="primary"> Login </Button>
          <Button
            size="xs"
            variant="secondary"
            leftIcon={<Icon as={Info} />}
            fontWeight="normal"
            pos="absolute"
            bottom={8}
            px={4}
          >
            If you forgot or missed your password, contact{" "}
            <Link
              target="_blank"
              to="http://macdasy.com"
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                padding: "0% 2%",
              }}
            >
              Macdasy.
            </Link>
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AdminLoginPage;
