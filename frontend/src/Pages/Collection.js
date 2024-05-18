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
      <Heading as='h1' size='2xl' p={10} noOfLines={1}>Collections Page</Heading>
    </ChakraProvider>
  );
}
export default Collection;