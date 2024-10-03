import { useParams } from "react-router-dom";
import { Box, Text, Img, Heading, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";
import { CartAlert } from "../cart/cartAlert";

export const ProductDetail = () => {  
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let url = `https://croma-b97df-default-rtdb.asia-southeast1.firebasedatabase.app/mobile/${id}.json`;
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(url)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);  

    const handleAddToCart = () => {
        if (product) {
            const cartItem = {
                title: product.title,
                image: product.image,
                price: product.price
            };
            
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
            
            existingCart.push(cartItem);

            localStorage.setItem("cart", JSON.stringify(existingCart));

            onOpen();
        }
    };

    return (
        <>
        <Box display="flex" flexDirection={{base:"column",md:"row",lg:"row"}} bg="#191919" p="40px 60px"> 
            <Box w={{base:"100%",md:"50%",lg:"50%"}}>
                {loading ? (
                    <Text>Loading product details...</Text>
                ) : error ? (
                    <Text>Error: {error}</Text>
                ) : product ? (
                    <>
                        <Box w={{base:"100%",md:"50%",lg:"50%"}} h="350" ml="auto" mr="auto">
                            <Img src={product.image} alt={product.title} width="100%" mb="10px" h="350px"/>
                        </Box>
                    </>
                ) : (
                    <Text>Product not found.</Text>
                )}
            </Box>
            <Box w={{base:"100%",md:"50%",lg:"50%"}} color="white" p="20px 0px">
                {product && (
                    <>
                        <Heading mt="20px" size="md">{product.title}</Heading>
                        <Box mt="20px" display="flex">
                            <Text color="#12dda6">{product.rating}</Text>
                            <Img src="https://github.com/Sangavi002/croma_img/blob/main/star.png?raw=true" alt="star" w="4%" h="15px" m="5px 3px"/> 
                        </Box>
                        <Heading mt="20px" mb="20px" size="md">₹{product.price}</Heading>
                    </>
                )}
                <Box display="flex" gap="30px">
                    <Button bg="none" color="white" border="1px solid" onClick={handleAddToCart}>Add to cart</Button>
                    <Button bg="#12dda6" color="white" >Buy now</Button>
                </Box>
            </Box>
        </Box>
        <CartAlert isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
};
