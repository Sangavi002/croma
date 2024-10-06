import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, Button, Text, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = ({ onOpen, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Enter your Email id.";
    if (!formData.password) newErrors.password = "Invalid password.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    axios.post('https://reqres.in/api/login', {
      email: formData.username, 
      password: formData.password
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      onClose(); 
      alert("Logged in successfully.")
      setFormData({ username: '', password: '' });
      navigate('/'); 
    })
    .catch((err) => {
      alert("Error in Login."); 
      setErrors({}); 
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#191919" color="white" p="30px 40px" mt="130px">
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Box display="flex" justifyContent="center">
            <Box border="1px solid" w="50%" borderLeftRadius="5px" p="8px 12px">
              <Text color="white">eve.holt@reqres.in</Text>
            </Box>
            <Box border="1px solid" w="50%" borderRightRadius="5px" p="8px 12px">
              <Text color="white">cityslicka</Text>
            </Box>
          </Box>
          <Text m="10px 0px">Please enter above Email ID and Password</Text>
          <Input
            placeholder="Enter your EmailID"
            m="10px 0px"
            color="white"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <Text color="red" fontSize="14px">{errors.username}</Text>}
          <Input
            placeholder="Enter your password"
            m="10px 0px"
            color="white"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <Text color="red" fontSize="14px">{errors.password}</Text>}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit} w="100%">
            Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
