import React from 'react';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  useDisclosure,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

export const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonText = useBreakpointValue({ base: '', sm: "Menu", md: 'Menu' }); 
  

  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        border="none"
        color="white"
        leftIcon={<HamburgerIcon />}
        ml={{ base: '0px', sm: "20px", md: '30px' }}
        _hover={{ bg: 'transparent', color: 'white' }} 
        p="0px"
      >
        {buttonText} 
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent mt={{ base: "60px", sm: "80px", md: "80px" }} bg="#191919" color="white" ml={{ base: "0px", md: "80px" }} h="450px">
          <DrawerHeader>Shop by Category</DrawerHeader>
          <DrawerBody>
            <Box>
              {[
                { to: "/Televisions", label: "Television & Accessories" },
                { to: "/Washing Machines", label: "Washing Machines" },
                { to: "/Mobile Phones", label: "Phone & Wearables" },
                { to: "/Laptop", label: "Laptop" },
                { to: "/Kitchen Appliances", label: "Kitchen Appliances" },
                { to: "/Air Conditioners", label: "Air Conditioners" },
                { to: "/Health & Fitness", label: "Health & Fitness" },
                { to: "/Cameras & Accessories", label: "Cameras & Accessories" },
                { to: "/Smart Devices", label: "Smart Devices" },
                { to: "/Gaming", label: "Gaming" }
              ].map((item, index) => (
                <Text
                  key={index}
                  color="white"
                  pr="100px"
                  cursor="pointer"
                  mb="10px"
                >
                  <Link to={item.to} onClick={onClose}>
                    {item.label}
                  </Link>
                </Text>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
