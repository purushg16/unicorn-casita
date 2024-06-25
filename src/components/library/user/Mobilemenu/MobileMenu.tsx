import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuIcon, X } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RHeading, RText } from "../../../Utilities/Typography";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <HStack>
        <IconButton
          size="sm"
          aria-label="menu-btn"
          icon={<Icon as={MenuIcon} boxSize={5} color="black" />}
          onClick={onOpen}
          ref={btnRef}
          bg="white"
          _hover={{ bg: "white" }}
          _focus={{ bg: "white" }}
          _active={{ bg: "white" }}
        />
        <Box w={2} />
      </HStack>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent borderRadius="0px !important">
          <DrawerBody my={4}>
            <VStack align="start" gap={4} mb={12}>
              <VStack w="100%" h="100%" align="start" gap={4}>
                <Icon as={X} boxSize={5} mb={4} onClick={onClose} />
                <Link
                  to="/collections"
                  onClick={onClose}
                  style={{
                    width: "100%",
                    padding: "6px 0px",
                    borderBottom: "1px solid",
                    borderColor: "#e8e8e8",
                  }}
                >
                  <RHeading
                    textTransform="uppercase"
                    weight="bold"
                    text="Collections"
                    color="gray.600"
                    small
                  />
                </Link>
                <Link
                  to="/bestsellings"
                  onClick={onClose}
                  style={{
                    width: "100%",
                    padding: "6px 0px",
                    borderBottom: "1px solid",
                    borderColor: "#e8e8e8",
                  }}
                >
                  <RHeading
                    textTransform="uppercase"
                    weight="bold"
                    text="bestsellings"
                    color="gray.600"
                    small
                  />
                </Link>
                <Link
                  to="/categories"
                  onClick={onClose}
                  style={{
                    width: "100%",
                    padding: "6px 0px",
                    borderBottom: "1px solid",
                    borderColor: "#e8e8e8",
                  }}
                >
                  <RHeading
                    textTransform="uppercase"
                    weight="bold"
                    text="categories"
                    color="gray.600"
                    small
                  />
                </Link>
                <Link
                  to="/wholesale"
                  onClick={onClose}
                  style={{
                    width: "100%",
                    padding: "6px 0px",
                    borderBottom: "1px solid",
                    borderColor: "#e8e8e8",
                  }}
                >
                  <RHeading
                    textTransform="uppercase"
                    weight="bold"
                    text="wholesale"
                    color="gray.600"
                    small
                  />
                </Link>
              </VStack>
              <VStack align="start" gap={4} w="100%">
                <Link
                  to="/about"
                  onClick={onClose}
                  style={{
                    width: "100%",
                    padding: "6px 0px",
                    borderBottom: "1px solid",
                    borderColor: "#e8e8e8",
                  }}
                >
                  <RHeading
                    text="About Us"
                    textTransform="uppercase"
                    weight="bold"
                    color="gray.600"
                    small
                  />
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  style={{
                    width: "100%",
                    padding: "6px 0px",
                    borderBottom: "1px solid",
                    borderColor: "#e8e8e8",
                  }}
                >
                  <RHeading
                    text="Contact Us"
                    textTransform="uppercase"
                    weight="bold"
                    color="gray.600"
                    small
                  />
                </Link>
              </VStack>
            </VStack>

            <VStack align="start" gap={4}>
              <Link to="/privacypolicy" onClick={onClose}>
                <RHeading
                  text="Privacy Policy"
                  small
                  weight="normal"
                  color="gray.400"
                />
              </Link>
              <Link to="/termsandcondtions" onClick={onClose}>
                <RHeading
                  text="Terms & Conditions"
                  small
                  weight="normal"
                  color="gray.400"
                />
              </Link>
              <Link to="/shippinganddeliverypolicy" onClick={onClose}>
                <RHeading
                  text="Shipping & Delivery"
                  small
                  weight="normal"
                  color="gray.400"
                />
              </Link>
              <Link to="/cancellationorrefundpolicy" onClick={onClose}>
                <RHeading
                  text="Cancellation or Refund policy"
                  small
                  weight="normal"
                  color="gray.400"
                />
              </Link>
            </VStack>
            <Link to="/collections" onClick={onClose}>
              <VStack
                justify="center"
                mt={12}
                w="100%"
                h="30%"
                bgImg="https://images.unsplash.com/photo-1440508319978-8b67875e39d7?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
              >
                <RText
                  small
                  text="BEST SELLINGS"
                  weight="semibold"
                  color="white"
                />
              </VStack>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
