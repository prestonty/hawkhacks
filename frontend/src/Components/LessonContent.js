import React from 'react';
import {  Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, Box, HStack, VStack } from '@chakra-ui/react'

const LessonContent= ({heading, content}) =>{
  return (
    <div>
      <Heading as='h1' size='2xl' p={10} noOfLines={1}>{heading}</Heading>
      <p>
        {content}
      </p>

    </div>

  );
}
export default LessonContent;