import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  import { Heading, Link, VStack, HStack, Box, Text, Button, ButtonGroup,
     Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Lesson from '../Components/LessonContent'
import React from 'react';

const Lessons = () =>{
  return (
    <ChakraProvider>
    <Box display='flex' alignItems='center' justifyContent='center' width='100%' mb={2}>
      <Heading as='h1' size='2xl' p={10} noOfLines={2}>LESSONS</Heading>
    </Box>
    <Tabs variant='soft-rounded' colorScheme='green'>
      <HStack>
        <TabList>
          <VStack>
            <Tab>LESSON 1</Tab>
            <Tab>LESSON 2</Tab>
          </VStack>
        </TabList>
        
        <TabPanels>
          <TabPanel>
            <Lesson content={"HELLO"} heading={"WHAT IS BLOCKCHAIN"}/>
          </TabPanel>
          <TabPanel>
            <Lesson content={"byeee"} heading={"PART TWO"}/>
          </TabPanel>
        </TabPanels>
      </HStack>
    </Tabs>
    </ChakraProvider>
  );
}
export default Lessons;