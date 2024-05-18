import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  import { Heading, Box, Text, Button, ButtonGroup } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
import React from 'react';

const Home = () =>{
  // React Router for Button 
  const navigate = useNavigate()
  const goToNewPage=()=>{
    navigate("/lessons") // Navigate to the lessons page when 'Get Started' is clicked
  }
  return (
    <ChakraProvider>
    {/* home page */}
    <Box 
    display='flex'
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
    </Box>
    </ChakraProvider>
  );
}
export default Home;