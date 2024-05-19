import { ChakraProvider } from '@chakra-ui/react'
import LessonAward from '../Components/LessonAward'
import axios from 'axios'

import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  import { Heading, Box, Center, Text, HStack, Button, ButtonGroup, VStack } from '@chakra-ui/react'

import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

import React, {useEffect, useState} from 'react';
const Collection = withAuthInfo((props) => {
  const logoutFunction = useLogoutFunction()
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()
  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    if (props.user) {
      axios.get(`http://localhost:4000/api/users/${props.user.email}`)
        .then((response) => {
          console.log(response.data);
          setResponseData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.user]);

  if (props.isLoggedIn) 
  {
      return (
        <ChakraProvider>
          <Heading as='h1' size='2xl' p={10} noOfLines={1}>COLLECTION</Heading>
          <Text p={10}>{props.user.email}</Text>
          <Text>{props.user.hasPassword ? "Has a password" : "No Password!?"}</Text>
          <Text>{responseData}</Text>

          <HStack>
            {[...Array(3)].map((_, index) => (
              //to change the numbers of cards displayed, change the hard coded value, 3
              <LessonAward key={index} props={index} />
            ))}
          </HStack>

        </ChakraProvider>);
  } else {  
      return (
        <ChakraProvider>
          <Center h="100vh">
            <VStack>
              <Button p={10} size='md' colorScheme='purple' onClick={() => redirectToLoginPage()}>LOGIN TO VIEW YOUR PROGRESS</Button>
            </VStack>

          </Center>
        </ChakraProvider>);
  }

})

export default Collection;