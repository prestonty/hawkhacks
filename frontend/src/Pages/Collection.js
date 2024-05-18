import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  import { Heading, Box, Text, Button, ButtonGroup } from '@chakra-ui/react'

import React from 'react';
const Collection = () =>{
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
    <Heading as='h1' size='2xl' p={10} noOfLines={2}>Collections Page</Heading>
    <Button colorScheme='purple' size='md' mx={20} my={10}>Get Started</Button>

    <Text fontSize='2xl'>Building your blockchain knowledege BLOCK BY BLOCK</Text>
    </Box>
    </ChakraProvider>
  );
}
export default Collection;