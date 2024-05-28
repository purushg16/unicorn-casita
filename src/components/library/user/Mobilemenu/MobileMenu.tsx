import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RHeading, RText } from "../../../Utilities/Typography";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Icon as={MenuIcon} onClick={onOpen} ref={btnRef} boxSize={6} />
      <Drawer
        size="full"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent borderRadius="0px !important">
          <DrawerCloseButton />
          <DrawerHeader color="primary.800"> Unicorn Casita </DrawerHeader>
          <DrawerBody my={4}>
            <VStack align="start" gap={4} mb={12}>
              <RText text="MENU" small />
              <VStack h="100%" align="start" gap={4}>
                <Link to="/collections" onClick={onClose}>
                  <RHeading
                    weight="semibold"
                    text="Collections"
                    color="primary.800"
                    small
                  />
                </Link>
                <Link to="/categories" onClick={onClose}>
                  <RHeading
                    weight="semibold"
                    text="Categories"
                    color="primary.800"
                    small
                  />
                </Link>
                <Link to="/collections" onClick={onClose}>
                  <RHeading
                    weight="semibold"
                    text="New Arrivals"
                    color="primary.800"
                    small
                  />
                </Link>
              </VStack>
            </VStack>

            <VStack align="start" gap={4} mb={12}>
              <RText text="Brand" small />
              <VStack align="start" gap={4}>
                <Link to="/about" onClick={onClose}>
                  <RHeading text="About Us" color="primary.800" small />
                </Link>
                <Link to="/contact" onClick={onClose}>
                  <RHeading text="Contact Us" color="primary.800" small />
                </Link>
              </VStack>
            </VStack>

            <VStack align="start" gap={4}>
              <RText text="Policies" small />
              <VStack align="start" gap={4}>
                <Link to="/privacypolicy" onClick={onClose}>
                  <RHeading text="Privacy Policy" small weight="normal" />
                </Link>
                <Link to="/termsandcondtions" onClick={onClose}>
                  <RHeading text="Terms & Conditions" small weight="normal" />
                </Link>
                <Link to="/shippinganddeliverypolicy" onClick={onClose}>
                  <RHeading text="Shipping & Delivery" small weight="normal" />
                </Link>
                <Link to="/cancellationorrefundpolicy" onClick={onClose}>
                  <RHeading
                    text="Cancellation or Refund policy"
                    small
                    weight="normal"
                  />
                </Link>
              </VStack>
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
                  text="NEW ARRIVALS"
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
