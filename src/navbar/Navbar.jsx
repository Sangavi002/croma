import { Box, Img, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerMenu } from "./hamburgerMenu";
import { Login } from "./login"; 
import { useDisclosure } from "@chakra-ui/react"; 
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const logoWidth = useBreakpointValue({ base: "70%",sm:"100%", md: "100%" });
    const buttonSize = useBreakpointValue({ base: "20px",sm:"22px", md: "40px",lg:"30px" });
    const flexDirection = useBreakpointValue({ base: "row",sm: "row-reverse" , md:"row-reverse"});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate()

    return (
        <>
        <Box 
            bg="black" 
            h={{base:"60px",sm:"80px",md:"80px"}}
            p={{ base: "10px 10px",sm:"20px 40px", md: "20px 80px" }} 
            display="flex" 
            alignItems="center"
        >
            <Box display="flex" alignItems="center" flexDirection={flexDirection} w={{ base: "40%", md: "20%" }} ml={{sm:"-40px"}}>
                <HamburgerMenu />
                <Box  w={{sm:"50%"}}>
                    <Img 
                        src="https://raw.githubusercontent.com/Sangavi002/croma_img/02e6e42fafe62233bb974eec4bc5f71a63cd09d4/logo.svg"
                        alt="logo"
                        w={logoWidth} 
                    />
                </Box>
            </Box>

            <Box w={{ base: "0",sm:"50%", md: "50%" }} ml={{ base: "10px",sm:"30px", md: "40px" }} display={{base:"none",sm:"block",md:"block"}} >
                <Input 
                    placeholder="What are you looking for?" 
                    w="90%"
                    bg="white"
                />
            </Box>

            <Box w={{base:"20%",md:"20%",lg:"20%"}} ml={{ base: "100px",sm:"60px", md: "40px" }} display="flex" justifyContent="space-between" >
                <Button border="none" bg="none" display={{base:"none",sm:"block", md:"block"}} p={{base:"0",md:"0 16px"}} _hover={{ bg: 'transparent', color: 'white' }} >
                    <Img 
                        src="https://github.com/Sangavi002/croma_img/blob/main/location.png?raw=true"  
                        alt="location" 
                        w={buttonSize}
                    />
                </Button>
                <Button border="none" bg="none" p={{base:"0",md:"0 16px"}} _hover={{ bg: 'transparent', color: 'white' }} onClick={onOpen}>
                    <Img 
                        src="https://github.com/Sangavi002/croma_img/blob/main/login.png?raw=true"  
                        alt="login" 
                        w={buttonSize}
                    />
                </Button>
                <Button border="none" bg="none" p={{base:"0",md:"0 16px"}} _hover={{ bg: 'transparent', color: 'white' }} >
                    <Img 
                        src="https://github.com/Sangavi002/croma_img/blob/main/cart.png?raw=true"  
                        alt="cart" 
                        w={buttonSize} 
                        onClick={() => navigate("/cart")}
                    />
                </Button>
            </Box>     
        </Box>
        <Login isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
};
