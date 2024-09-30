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

export const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonText = useBreakpointValue({ base: '',sm:"Menu", md: 'Menu' }); 

  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        border="none"
        color="white"
        leftIcon={<HamburgerIcon />}
        ml={{ base: '0px',sm:"20px", md: '30px' }}
        _hover={{ bg: 'transparent', color: 'white' }} 
        p="0px"
      >
        {buttonText} 
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent mt={{base:"60px", sm:"80px",md:"80px"}} bg="#191919" color="white" ml={{base:"0px", md:"80px"}} h="450px">
          <DrawerHeader>Shop by Category</DrawerHeader>
          <DrawerBody>
            <Box>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Television & Accessories
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Home Appliances
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Phone & Wearables
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Computers & Tablets
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Kitchen Appliances
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Audio & Video
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Health & Fitness
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Cameras & Accessories
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Smart Devices
              </Text>
              <Text onClick={onClose} color="white" pr="100px" cursor="pointer" mb="10px">
                Gaming
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
