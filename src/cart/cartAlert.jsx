import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text, Box, Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CartAlert = ({ onOpen, isOpen, onClose }) => {
    const [lastItem, setLastItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
            if (storedCart.length > 0) {
                setLastItem(storedCart[storedCart.length - 1]); 
            }
        }
    }, [isOpen]);

    
    const handleProceedToCart = () => {
        if (lastItem) {
            const cartAPI = "https://croma-b97df-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"; 
            axios.post(cartAPI, lastItem)
                .then(response => {
                    onClose(); 
                    navigate("/cart")
                })
            
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="#191919" color="white" p="20px" mt="130px">
                    <ModalCloseButton />
                    <ModalHeader display="flex"> 
                        <Img src="https://github.com/Sangavi002/croma_img/blob/main/tick.png?raw=true" alt="tick" w="9%" mr="10px" />
                        1 Item added to the cart!
                    </ModalHeader>
                    <ModalBody textAlign="center">
                        {lastItem ? (
                            <Box textAlign="left" display="flex" gap="20px">
                                <Img src={lastItem.image} alt={lastItem.title} boxSize="60px" />
                                <Text fontSize="md" fontWeight="500">{lastItem.title}</Text>
                                <Text fontWeight="500" mt="20px">₹{lastItem.price}</Text>
                            </Box>
                        ) : (
                            <Text>No items in the cart.</Text>
                        )}
                    </ModalBody>

                    <ModalFooter display="flex" justifyContent="center">
                        <Button bg="#12dda6" mr={3} onClick={handleProceedToCart} w="40%" p={{base:" 0px 70px"}}>
                            Proceed to cart
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
