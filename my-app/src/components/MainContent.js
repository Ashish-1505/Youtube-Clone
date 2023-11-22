
import React from 'react';
import { Text,Box, Heading, IconButton, Image as ChakraImage, Button, Flex, Spacer,Icon,Image, HStack } from '@chakra-ui/react';
import { FaArrowLeft, FaSquare,FaPhone,FaComments,FaLaptop,FaVideo,FaSchool,FaSlideshare,FaDocker,FaCamera,FaMicrophone,FaShare,FaTrophy,FaArrowAltCircleRight, FaSms} from 'react-icons/fa';
import YouTube from 'react-youtube';
const MainContent = () => {
  const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6'];
  const images = [
    { src: '/https://www.shutterstock.com/image-photo/full-length-photo-little-boy-600nw-2191713475.jpg', name: 'Person 1' },
    { src: '/image2.png', name: 'Person 2' },
  ];

  const videoOptions = {
    height: '500',
    width: '1000px',
  };

  return (
    <Box ml="100px" p="4" >
      <Flex align="center" mb="4">
        <IconButton icon={<FaArrowLeft />} />
        <Heading ml="4">Basic Mathematics</Heading>
          <Button
          leftIcon={<Icon as={FaPhone} />}
          colorScheme="blue"
          variant="solid"
          size="sm"
          ml="auto"
          mr="2"
        >
          Call Teacher
        </Button>

        <Button
          leftIcon={<Icon as={FaComments} />}
          colorScheme="orange"
          variant="solid"
          size="sm"
        >
          Support
        </Button>
      </Flex>
        <Box height={"50px"} width={"90vw"}  bg={"gray.400"} borderRadius={"30px"} >
            <Flex align={"center"} ml={"10"} p={"1"} >
                <Button bg={"gray.400"} color={"white"} ml={"20"}>
                <Icon as={FaLaptop} color={"white"} boxSize={"4"}/>Classroom</Button>
                <Button bg={"gray.400"} color={"white"}  ml={"20"}>
                <Icon as={FaSchool} color={"white"} boxSize={"4"}/>Whiteboard</Button>
                <Button bg={"white"} color={"black"}  ml={"20"} borderRadius={"30px"}>
                <Icon as={FaVideo} color={"black"} boxSize={"4"}/>Videos</Button>
                <Button bg={"gray.400"} color={"white"}  ml={"20"}>
                <Icon as={FaSlideshare} color={"white"} boxSize={"4"}/>SlideShow</Button>
                <Button bg={"gray.400"} color={"white"}  ml={"20"}>
                <Icon as={FaDocker} color={"white"} boxSize={"4"}/>Doccument</Button>
                <Button bg={"gray.400"} color={"white"}  ml={"20"}>
                <Icon as={FaCamera} color={"white"} boxSize={"4"}/>Doc.cam</Button>
                
            </Flex>
        </Box>
        <Flex align={"center"}>
        <Box mt={"10"}>

            <Box position="relative">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVno-Mu36UcWckNAPkrMu8z7ROhEESSoAtCw&usqp=CAU" alt="WhiteHat Junior Logo" boxSize="200px" mb="4" borderRadius={"20px"} />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              width="30%"
              bg="white"
              p="2"
              opacity="0.7"
              borderRightRadius={"10px"}
           >
        <Text color="black" fontWeight={"bold"}>Ridha</Text>
        
          </Box>
      </Box>

      <Box position="relative">
              <Image src="https://png.pngtree.com/png-vector/20230430/ourmid/pngtree-teachers-day-characters-png-image_6740168.png" alt="WhiteHat Junior Logo" boxSize="200px" mb="4" borderRadius={"20px"} />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              width="30%"
              bg="white"
              p="2"
              opacity="0.7"
              borderRightRadius={"10px"}
           >
        <Text color="black" fontWeight={"bold"}>Ms. Kaur</Text>
        
          </Box>
      </Box>
      <HStack>
        <Button>
      <Icon as={FaVideo} color={"black"} boxSize={"4"}/>
      </Button>
      <Button>
      <Icon as={FaMicrophone} color={"black"} boxSize={"4"}/>
      </Button>
      <Button>
      <Icon as={FaShare} color={"black"} boxSize={"4"}/>
      </Button>
      </HStack>
      <HStack mt={"5"}>
        <Button>
      <Icon as={FaSms} color={"black"} boxSize={"4"}/>
      </Button>
      <Button>
      <Icon as={FaArrowAltCircleRight} color={"black"} boxSize={"4"}/>
      </Button>
      </HStack>
      
        </Box>
        <Box maxW="1200px" ml={"40px"} mt={"10"}> 
          <YouTube videoId="JeVSmq1Nrpw" opts={videoOptions}  mt={"5"}/>
        </Box>
        
        </Flex>
    </Box>
  );
};

export default MainContent;


