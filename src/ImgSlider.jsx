import { Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const product = [
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/mobile.webp", alt: "Mobile Phones" },
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/wm.webp", alt: "Washing Machines" },
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/tv.webp", alt: "Televisions" },
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/laptop.webp", alt: "Laptops" },
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/ac.webp", alt: "Air Conditioners" },
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/kitchen.webp", alt: "Kitchen Appliances" },
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/fridge.webp", alt: "Refrigerators" },
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/headphone.webp", alt: "Headphones & Earphones" },
];

const offer = [
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/neu.webp" },
  { image: "https://raw.githubusercontent.com/Sangavi002/croma_img/refs/heads/main/hdfc.webp" },
];

export const ImgSlider = () => {
  return (
    <>
      <Box p={{ base: "10px", md: "20px", lg: "20px 60px" }} bg="#191919" display="grid" gridTemplateColumns={{ base: "repeat(4, 25%)", md: "repeat(8, 12%)", lg: "repeat(8, 12%)" }}>
        {product.map((item, index) => (
          <Box key={index} w="100%" p="10px">
            <Link to={`/${item.alt}`} style={{ textDecoration: "none" }}>
              <Image src={item.image} alt={item.alt} w="100%" />
            </Link>
          </Box>
        ))}
      </Box>
      <Box display="flex" flexDirection={{ base: "column", md: "row", lg: "row" }} p={{ base: "10px", md: "20px 60px", lg: "20px 60px" }} bg="#191919" gap="20px">
        {offer.map((item, index) => (
          <Box key={index}>
            <Image src={item.image} alt={`offer-${index}`} w="100%" borderRadius="10px" />
          </Box>
        ))}
      </Box>
      <Box p={{ base: "10px", md: "20px 60px", lg: "20px 60px" }} bg="#191919">
        <Heading size="lg" color="white" mb="20px">Exciting Bank Offers For You</Heading>
        <Image src="https://github.com/Sangavi002/croma_img/raw/refs/heads/main/icici.webp" alt="ICICI offer" w="100%" borderRadius="10px" h={{ base: "50px" }} />
      </Box>
    </>
  );
};
