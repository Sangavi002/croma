import { Box, Heading, Input, Button, Text, Img } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

export const CheckOut = () => {
    const url = "https://croma-b97df-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"; 
    const checkoutUrl = "https://croma-b97df-default-rtdb.asia-southeast1.firebasedatabase.app/checkout.json";
    const [product, setProduct] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setProduct(res.data);
                calculateTotal(res.data);
            })
            .catch((err) => {
                console.error("Error fetching cart data:", err);
            });
    }, []);

    const calculateTotal = (cartData) => {
        const total = Object.values(cartData).reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required"; 
        if (!formData.mobile) newErrors.mobile = "Mobile number is required";
        if (!formData.address) newErrors.address = "Address is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleCheckout = () => {
        if (validateForm()) {
            const checkoutData = {
                ...formData,
                products: Object.entries(product).map(([id, value]) => ({
                    title: value.title,
                    price: value.price
                })),
                totalPrice
            };

            axios.post(checkoutUrl, checkoutData)
                .then(() => {
                    return axios.delete(url);
                })
                .then(() => {
                    alert("Order Placed");
                    navigate("/");
                })
                .catch(error => {
                    console.error("Error during checkout:", error);
                    alert("Error in placing the order.");
                });
        }
    };

    return (
       <Box p={{base:"10px ",sm:"30px",md:"40px",lg:"40px 60px"}} bg="#f9f9f9">
            <Heading size={{base:"sm",md:"md",lg:"md"}}>ENTER SHIPPING INFORMATION</Heading>
            <Box display={{base:"block",md:"Flex",lg:"Flex"}} gap={{base:"0px",md:"30px",lg:"30px"}} mt="10px">
                <Box w={{base:"100%",md:"70%",lg:"70%"}}  >
                    <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"p="20px">
                        <Heading size="sm">Contact Information</Heading>
                        <Box display={{base:"block",md:"Flex",lg:"Flex"}} p="10px 0px" gap="60px">
                            <Box>
                                <label>Firstname</label>
                                <Input name="firstName" placeholder="Enter FirstName" m="10px 0px" required value={formData.firstName} onChange={handleChange} /> 
                                {errors.firstName && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.firstName}</Text>}
                                <label>Email</label>
                                <Input name="email" placeholder="Enter your Email id" m="10px 0px" required value={formData.email} onChange={handleChange} /> 
                                {errors.email && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.email}</Text>}  
                            </Box>
                            <Box>
                                <label>Lastname</label>
                                <Input name="lastName" placeholder="Enter LastName" m="10px 0px" required value={formData.lastName} onChange={handleChange} /> 
                                {errors.lastName && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.lastName}</Text>}  
                                <label>Mobile</label>
                                <Input name="mobile" placeholder="Enter your mobile number" m="10px 0px" required value={formData.mobile} onChange={handleChange} /> 
                                {errors.mobile && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.mobile}</Text>}  
                            </Box>
                        </Box>
                        <label>Enter Shipping Address:</label>
                        <Input name="address" placeholder="Enter your shipping address" m="10px 0px" required value={formData.address} onChange={handleChange} /> 
                        {errors.address && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.address}</Text>}  
                    </Box>
                    <Box m={{base:"10px 0"}} >
                        <Heading size="sm" m="10px 10px">Delivery Options</Heading>
                        {Object.entries(product).map(([id, value]) => (
                            <Box key={id} display="flex" w={{base:"100%",md:"100%",lg:"100%"}} alignItems="center" h={{base:"100px",md:"120px",lg:"100px"}} mb="50px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
                                <Box w={{base:"50%",sm:"70%",md:"50%",lg:"30%"}} p="20px">
                                    <center>
                                        <Img
                                            src={value.image}
                                            alt={value.title}
                                            w={{ base: "80%", sm: "40%", md: "60%", lg: "40%" }}
                                            h={{ base: "80px", sm: "80px", md: "40%", lg: "80px" }}
                                        />
                                    </center>
                                </Box>
                                <Box display={{base:"block",lg:"flex"}}> 
                                    <Heading size={{base:"xs",md:"xs" ,lg:"md"}} mr={{base:"0px",lg:"50px"}} mb={{base:"10px"}}>{value.title}</Heading>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box w={{base:"100%",md:"40%",lg:"30%"}} m={{base:"20px 0px"}} p="20px" h={{base:"240px",md:"220px",lg:"240px"}} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
                    <Heading mb="20px" size={{md:"sm",lg:"md"}}>Order Summary ({Object.keys(product).length} items)</Heading>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Original Price</Text>
                        <Text>₹{totalPrice}</Text>
                    </Box>
                    <hr style={{margin: "10px 0px"}}/>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Total</Text>
                        <Text>₹{totalPrice}</Text>
                    </Box>
                    <Button bg="#12dda6" mr={3} w="100%" m="20px 0px" onClick={handleCheckout} bg="#12dda6">
                        Place order
                    </Button>
                </Box>
            </Box>
            
       </Box>
    )
}
