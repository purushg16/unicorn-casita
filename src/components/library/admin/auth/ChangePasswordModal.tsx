import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import LabelledInput from "../../../Utilities/LabelledInput";
import { useState } from "react";
import { LockIcon } from "lucide-react";
import { useAdminChangePassword } from "../../../hooks/admin/useAdminAuth";

const ChangePasswordModal = ({ small }: { small?: boolean }) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const resetState = () => {
    setPassword("");
    setConfirmPassword("");
    onClose();
  };

  const { mutate, isPending } = useAdminChangePassword(resetState);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        size={small ? "xs" : "sm"}
        onClick={onOpen}
        color="black"
        variant="link"
        w="100%"
        justifyContent="space-between"
        rightIcon={<Icon as={LockIcon} />}
      >
        Change Password
      </Button>
      <Modal
        isOpen={isOpen}
        isCentered
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Change Password </ModalHeader>
          <ModalBody>
            <VStack gap={4}>
              <LabelledInput
                label="New Password"
                value={password}
                onTextChange={setPassword}
                type="password"
              />
              <LabelledInput
                label="Confirm Password"
                value={confirmPassword}
                onTextChange={setConfirmPassword}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={4}>
              Close
            </Button>
            <Button
              onClick={() => mutate({ password })}
              isLoading={isPending}
              variant="primary"
              isDisabled={
                !password || !confirmPassword || password !== confirmPassword
              }
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
