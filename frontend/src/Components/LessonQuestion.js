import React from 'react';
import {  Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, Box, Button, HStack, VStack } from '@chakra-ui/react'

export default function LessonQuestion(props) {
    // variables
    let question = "What is Blockchain?"
    return(
        <ChakraProvider>
            <Heading as='h1' size='2xl'pb={10} noOfLines={1}>{question + " (within 20 words)"}</Heading>
      
      {/* implement a word count
      implement a loading screen
       */}
       <Box bg="#484554" width={400} height={800}>
      <Text fontSize="2xl" whiteSpace="pre-line" width='75%'>
        hi
      </Text>
      </Box>

      {/* <Button mt={10} p={5} size='lg' colorScheme='purple'>Next</Button> */}
        </ChakraProvider>
    );
};