import { Box, Image,Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const product = [
  { img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/mobile.webp",alt:"mobile" },
  { img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/wm.webp" ,alt:"wm"},
  { img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/tv.webp" ,alt:"tv"},
  { img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/laptop.webp" ,alt:"laptop"},
  { img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/ac.webp" ,alt:"ac"},
  { img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/kitchen.webp" ,alt:"kitchen"},
  { img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/fridge.webp" ,alt:"fridge"},
  { img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/headphone.webp" ,alt:"headphone"},
];

const offer = [
    {img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/neu.webp"},
    {img: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/hdfc.webp"},
]

export const ImgSlider = () => {
  return (
    <>
    <Box p={{base:"10px",md:"20px",lg:"20px 60px"}} bg="#191919" display="grid" gridTemplateColumns={{base:"repeat(4,25%)",md:"repeat(8,12%)",lg:"repeat(8,12%)"}}>
        {product.map((item, index) => (
          <Box key={index} w="100%"  p="10px">
            <Link key={index} to={`/${item.alt}`} style={{textDecoration: "none"}}>
              <Image src={item.img} alt={item.alt} w="100%"/>
            </Link>
          </Box>
        ))}
    </Box>
    <Box display="flex" flexDirection={{base:"column",md:"row",lg:"row"}} p={{base:"10px",md:"20px 60px",lg:"20px 60px"}} bg="#191919" gap="20px" >
        {offer.map((item,index) => (
            <Box key={index}>
                <Image src={item.img} alt={`product-${index}`} w="100%" borderRadius="10px"/>
            </Box>
        ))}
    </Box>
    <Box p={{base:"10px",md:"20px 60px",lg:"20px 60px"}} bg="#191919" >
        <Heading size="lg" color="white" mb="20px">Exciting Bank Offers For You</Heading>
        <Image src="https://github.com/Sangavi002/croma_img/raw/refs/heads/main/icici.webp" alt="offer" w="100%" borderRadius="10px" h={{base:"50px"}}/>
    </Box>

    </>
  );
};
