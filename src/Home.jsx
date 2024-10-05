import { Box,Img } from "@chakra-ui/react";
import { ImgSlider } from "./ImgSlider";

export const Home = () => {
    return(
        <Box p={{base:"60px 0px",md:"80px 0px",lg:"80px 0px"}}>
            <Img src="https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/offer.webp" alt="discount"/>
            <ImgSlider />
        </Box>
        
    )
}