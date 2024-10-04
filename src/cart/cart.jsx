import { Box, Heading, Img, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from '../cart/CartContext';

export const Cart = ({ onOpen }) => {
    const url = "https://croma-b97df-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"; 
    const [product, setProduct] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const { updateCart } = useCart(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setProduct(res.data || {}); 
                calculateTotal(res.data);
                updateCart(Object.keys(res.data || {}).length); 
            })
            .catch((err) => {
                console.error("Error fetching cart data:", err);
            });
    }, []);

    const calculateTotal = (cartData) => {
        if (cartData && typeof cartData === 'object') {
            const total = Object.values(cartData).reduce((sum, item) => sum + item.price, 0);
            setTotalPrice(total);
        } else {
            setTotalPrice(0); 
        }
    };

    const removeProduct = (id) => {
        const updatedCart = { ...product };
        delete updatedCart[id];

        setProduct(updatedCart);
        updateCart(Object.keys(updatedCart).length); 

        axios.put(url, updatedCart)
            .then(() => {
                calculateTotal(updatedCart);
            })
            .catch((err) => console.error("Error removing product:", err));
    };

    const handleCheckout = () => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate("/checkout"); 
        } else {
            onOpen(); 
        }
    };

    return (
        <Box p={{ base: "10px", sm: "30px", md: "40px", lg: "40px 60px" }} bg="#f9f9f9">
            <Heading>Your Cart</Heading>
            {Object.keys(product).length === 0 ? ( 
                <Box display="flex" flexDirection="column" alignItems="center" h="500px" pt="100px">
                    <Img src="https://github.com/Sangavi002/croma_img/blob/main/emptycart.png?raw=true" alt="emptyCart" w="20%"/>
                    <Text>Your cart is empty</Text>
                    <Link to="/" style={{ color: "#12dda6", textDecoration: "underline" , fontWeight:"500" }}>Continue Shopping</Link>
                </Box>
            ) : (
                <Box display="flex" flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }} gap={{ base: "10px", md: "40px", lg: "60px" }} mt="30px">
                    <Box w={{ base: "100%", sm: "100%", md: "60%", lg: "70%" }}>
                        {Object.entries(product).map(([id, value]) => (
                            <Box key={id} display="flex" alignItems="center" h="150px" mb="50px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
                                <Box w={{ base: "50%", sm: "70%", md: "50%", lg: "30%" }} p="20px">
                                    <center>
                                        <Img
                                            src={value.image}
                                            alt={value.title}
                                            w={{ base: "100%", sm: "60%", md: "80%", lg: "60%" }}
                                            h={{ base: "100px", sm: "40%", md: "40%", lg: "100px" }}
                                        />
                                    </center>
                                </Box>
                                <Box display={{ base: "block", lg: "flex" }} p={{md:"0px 10px"}}>
                                    <Heading size={{ base: "xs", md: "xs", lg: "sm" }} mr={{ base: "0px", lg: "20px" }} mb={{ base: "10px" }} w={{lg:"60%"}}>{value.title}</Heading>
                                    <Heading size={{ base: "xs", md: "xs", lg: "sm" }} mr={{ base: "0px", lg: "20px" }} mb={{ base: "10px" }}>₹{value.price}</Heading>
                                    <Button onClick={() => removeProduct(id)} bg="none" border="1px solid" _hover={{ borderColor: "#12dda6" }}>Remove</Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box w={{ base: "100%", md: "40%", lg: "30%" }} p="20px" h={{ base: "240px", md: "220px", lg: "240px" }} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
                        <Heading mb="20px" size={{ md: "md", lg: "lg" }}>Order Summary ({Object.keys(product).length})</Heading>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Original Price</Text>
                            <Text>₹{totalPrice}</Text>
                        </Box>
                        <hr style={{ margin: "10px 0px" }} />
                        <Box display="flex" justifyContent="space-between">
                            <Text>Total</Text>
                            <Text>₹{totalPrice}</Text>
                        </Box>
                        <Button bg="#12dda6" mr={3} w="100%" m="20px 0px" onClick={handleCheckout}>
                            Checkout
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};
