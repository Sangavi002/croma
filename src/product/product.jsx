import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, Img, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

export const Product = () => {
  const { item } = useParams();
  const gridTemplateColumns = useBreakpointValue({
    base: "300px",
    sm: "repeat(2, 300px)",
    md: "repeat(3, 210px)",
    lg: "repeat(3, 330px)",
  });

  const url = `https://croma-b97df-default-rtdb.asia-southeast1.firebasedatabase.app/Product/${item}.json`;
  const [data, setData] = useState({});
  

  useEffect(() => {
    axios.get(url)
    .then((res) => {
        setData(res.data)
    })
  }, []);



  return (
    <Box p={{ base: "20px 30px", sm: "20px 60px", md: "20px 40px", lg: "20px 60px" }} bg="#191919">
      <Heading color="white">{item.charAt(0).toUpperCase() + item.slice(1)}</Heading>
      <Box display="grid" gridTemplateColumns={gridTemplateColumns} gap={{ base: "60px 40px", sm: "60px 40px", md: "60px 40px", lg: "60px 80px" }} mt="30px">
        {Object.entries(data).length > 0 ? (
            Object.entries(data).map(([id, value]) => (
          <Link key={id} to={`/${item}/${id}`} style={{ textDecoration: "none" }}>
            <Box color="white" borderBottom="1px solid grey" display={{ base: "flex", sm: "block", md: "block" }}>
              <Box h={{ base: "170px", sm: "250px", md: "180px", lg: "280px" }} w={{ base: "85%", sm: "100%", md: "100%", lg: "100%" }} bg="#393939" borderRadius="20px" p={{ base: "10px 0px", sm: "20px" }}>
                <center>
                  <Img src={value.image} alt={value.title} w={{ base: "100%", sm: "80%", md: "80%", lg: "80%" }} h={{ base: "150px", sm: "80%" }} />
                </center>
              </Box>
              <Box p={{ base: "10px" }}>
                <Heading mt="20px" size="sm">{value.title}</Heading>
                <Box mt="20px" display="flex">
                  <Text color="#12dda6">{value.rating}</Text>
                  <Img src="https://github.com/Sangavi002/croma_img/blob/main/star.png?raw=true" alt="star" w="4%" h="15px" m="5px 3px" />
                </Box>
                <Heading mt="20px" mb="20px" size="sm">₹{value.price}</Heading>
              </Box>
            </Box>
          </Link>
        ))):(
            <Text color="White">No product available</Text>
        )}
      </Box>
    </Box>
  );
};
