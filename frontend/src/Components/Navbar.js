import React from 'react';
import {  Link } from "react-router-dom";
import Login from './Login'

import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
import { Image, Stack, Box, HStack, VStack } from '@chakra-ui/react'

import { AuthProvider } from "@propelauth/react";

const navbar= () =>{
  return (
    <ChakraProvider>

      <HStack justifyContent="space-between" p={4} bg="gray.400">
        <Image boxSize='50px' src={require("../Assets/logo.png").default} alt='Image Description' />

        <HStack justify="flex-end" spacing='24px' style={{ listStyleType: 'none' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/Collection">Collection</Link>
          </li>
          <AuthProvider authUrl="https://56311028.propelauthtest.com">
            <Login />
          </AuthProvider>,
        </HStack>
      </HStack>
    </ChakraProvider>
  );
}
export default navbar;