import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, Button,Text,Input,Box} from "@chakra-ui/react";

export const Login = ({ onOpen, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#191919" color="white" p="30px 40px" mt="130px" >
          <ModalCloseButton />
          <ModalBody textAlign="center"  >
            <Box display="flex" justifyContent="center">
            <Box border="1px solid" w="50%" borderLeftRadius="5px">
                <Button bg="none" color="white">Login</Button>
            </Box>
            <Box border="1px solid" w="50%" borderRightRadius="5px">
                <Button bg="none" color="white">Create Account</Button>
            </Box>
            </Box>
            <Text m="10px 0px">Please enter your Email ID and Password</Text>
            <Input placeholder="Enter your EmailID"
                m="10px 0px"
                color="white"/>
            <Input placeholder="Enter your password"
                m="10px 0px"
                color="white"/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} w="100%">
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
