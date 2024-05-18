import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  import { Heading, Box, Text, Button, ButtonGroup } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
import React from 'react';
import Lottie from 'react-lottie';

// import animationData from "./animations/blockchain_animate_1";

const Home = () =>{
  // React Router for Button 
  const navigate = useNavigate()
  const goToNewPage=()=>{
    navigate("/lessons") // Navigate to the lessons page when 'Get Started' is clicked
  }

  // Lottie animation
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };


  return (
    <ChakraProvider>
    {/* home page */}
    <Box 
    // display='flex'
  alignItems='center'
  justifyContent='center'
  width='100%'
  // bgImage="url('https://bit.ly/2Z4KKcF')"
  // bgPosition='center'
  // bgRepeat='no-repeat'
  mb={2}
>
    <Heading as='h1' size='2xl' p={10} noOfLines={2}>Gamifying the Learning Experience of Blockchain</Heading>
    <Button colorScheme='purple' size='md' mx={20} my={10} onClick={() => goToNewPage()}>Get Started</Button>
    {/* this button should navigate to Lessons page */}

    <Text fontSize='2xl'>Building your blockchain knowledege BLOCK BY BLOCK</Text>
    {/* <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      /> */}
    <div class="w-[1000]">
        <iframe class="w-full h-full" src="https://lottie.host/embed/99f583eb-3c36-444f-bce2-e528a9ba6980/a6tAxVXiKU.json" width="1200" height="600"></iframe>
    </div>
    <div class="w-[1000]">
        <iframe class="w-full h-full" src="https://lottie.host/embed/21db5904-e250-4578-bbed-abb072347647/w73QxfeXKI.json" width="1200" height="600"></iframe>
    </div>


      </Box>
    </ChakraProvider>
  );
}
export default Home;