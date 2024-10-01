import { Box,Img } from "@chakra-ui/react";
import { ImgSlider } from "./ImgSlider";

export const Home = () => {
    return(
        <Box>
            <Img src="https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/offer.webp" alt="discount"/>
            <ImgSlider />
        </Box>
        
    )
}