// src/components/CustomSidebar.js
import React from 'react';
import { Box, VStack, HStack, Avatar, Icon, Image, } from '@chakra-ui/react';
import { FaHome, FaBook, FaInfo, FaPhone, FaUser, FaCog, FaStar, FaHeart ,FaSlidersH,FaBell,FaClock,FaCalendar,FaEye,FaBars} from 'react-icons/fa';

const CustomSideBar = () => {
  return (
    <Box
      h="100vh"
      w="80px"
      bg="gray.200" 
      color="white"
      p="4"
      position="fixed"
      left="0"
      top="0"
    >
      <Image src="image.png" alt="WhiteHat Junior Logo" boxSize="40px" mb="4" />

      <VStack spacing="50px" mt={"10"}>
        <HStack align="center" color={"black"} >
          <Icon as={FaBars} boxSize={"6"}/>
        </HStack>
        <HStack align="center">
          <Icon as={FaBell} color={"black"} boxSize={"6"}/>
        </HStack>
        <HStack align="center" color={"gray"} >
          <Icon as={FaClock} boxSize={"6"}/>
        </HStack>
        <HStack align="center" color={"gray"}>
          <Icon as={FaCalendar} boxSize={"6"} />
        </HStack>
        <HStack align="center" color={"gray"}>
          <Icon as={FaEye} boxSize={"6"}/>
        </HStack>
        <HStack align="center" color={"gray"}>
          <Icon as={FaCog} boxSize={"6"}/>
        </HStack>
        <HStack align="center" color={"gray"}>
          <Icon as={FaUser} boxSize={"6"}/>
        </HStack>
      </VStack>

      <Avatar
        size="md"
        name="John Doe"
        src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg "
        mx="auto"
        mt={"100px"}
      />
    </Box>
  );
};

export default CustomSideBar;
