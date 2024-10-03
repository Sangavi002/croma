import { Box,Text,Input,Img, Heading, } from "@chakra-ui/react"

export const Footer = () => {
    return(
        <Box display="flex" bg="#1d1d1d" p={{md:"20px",lg:"40px"}}>
            <Box borderRight="1px solid" color="white" w={{base:"100%",md:"33%",lg:"33%"}} p={{base:"30px",md:"0px",lg:"0px 30px"}}>
                <Heading size="md">Connect with us</Heading>
                <Input placeholder="Enter Email Id" w="60%"/>
                <Box display="flex" gap="20px" mt="20px">
                    <Img src="https://github.com/Sangavi002/croma_img/blob/main/utube.png?raw=true" alt="utube" w="10%"/>
                    <Img src="https://github.com/Sangavi002/croma_img/blob/main/fb.png?raw=true" alt="utube" w="10%"/>
                    <Img src="https://github.com/Sangavi002/croma_img/blob/main/insta.png?raw=true" alt="utube" w="10%"/>
                    <Img src="https://github.com/Sangavi002/croma_img/blob/main/linkedin.png?raw=true" alt="utube" w="10%"/>
                    <Img src="https://github.com/Sangavi002/croma_img/blob/main/twitter.png?raw=true" alt="utube" w="10%"/>
                </Box>
                <Text mt="40px">© Copyright 2023 Croma. All rights reserved</Text>
            </Box>
            <Box borderRight="1px solid" color="white" p={{md:"0px 10px",lg:"0px 50px"}} w="33%" display={{base:"none",md:"block",lg:"block"}}>
                <Heading size="md">USEFUL LINKS</Heading>
                <Box display="flex" flexDirection="row" >
                    <Box >
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>About croma</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Help And Support</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>FAQs</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Buying Guide</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Return Policy</Text>
                    </Box>
                    <Box pl="50px">
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Site Map</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>CareersAtCroma</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>TermsOfUse</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Disclaimer</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Privacy Policy</Text>
                    </Box>
                </Box>
            </Box>
            <Box  color="white" p={{md:"0px 10px",lg:"0px 50px"}} w="33%" display={{base:"none",md:"block",lg:"block"}}>
                <Heading size="md">PRODUCTS</Heading>
                <Box display="flex" flexDirection="row" >
                    <Box w="40%">
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Televisions & Accessories</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Home Appliances</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Phones & Wearables</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Computers & Tablets</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Kitchen Appliances</Text>
                    </Box>
                    <Box pl="50px" w="80%">
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Grooming & Personal Care</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Cameras & Accessories</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Smart Devices</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Gaming</Text>
                        <Text mb="10px" fontWeight="700" fontSize="14px" _hover={{ color: "#12dda6" }}>Health & Fitness</Text>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
}