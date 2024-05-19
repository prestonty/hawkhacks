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

import LessonAward from '../Components/LessonAward';
import LessonQuestion from "../Components/LessonQuestion";

const Lessons = () =>{
  return (
    <ChakraProvider>
    <Box display='flex' alignItems='center' justifyContent='center' width='100%' mb={10}>
    </Box>
    <Tabs variant='soft-rounded' colorScheme='purple'>
      <HStack alignItems="flex-start" width="100%"> 
        <Box p={5} pb="900px" rounded='lg' bg="gray.200">
            <TabList width="100%" ml={100}>
              <VStack>
                <Tab width="full">LESSON 1</Tab>
                <Tab wdith="full">QUIZ 1</Tab>
                <Tab wdith="full">LESSON 2</Tab>
                <Tab wdith="full">QUIZ 2</Tab>
              </VStack>
          </TabList>
        </Box>

        
        <TabPanels ml={100}>
          <TabPanel>
            <Lesson
              content={
                "A blockchain is a distributed ledger (a database synchronized and accessible across different sites by various people) and is open to everyone! Let’s break down some terms: \n \n "+
                "     - Block: Each “block” irepresents a box that holds data, a hash, and the previous block's hash. The data can vary based on the purpose of the blockchain (e.g. storing information about transactions). \n" + 
                "     - Hash: Represents the block “identity” and is always unique. Every time the block is changed, the hash is changed as well (i.e if it changes, it no longer is the same block) \n" + 
                "     - Chain: Each block has the hash of the previous block, creating a “Chain” \n" + 
                "     - Genesis block: The first block in the chain \n \n" + 
                "Ultimately the idea is that if any of the blocks are tampered with, it’s hash will change. Consequently, it will confuse the following blocks as it no longer recognizes the hash. This makes the blockchain super secure \n \n" + 
                "However, it is also entirely possible that a computer could change one block, and then change the hashes of consecutive blocks to ensure the blocks fit. To avoid this, we have “proof of work” which slows down the creation of blocks. \n \n" + 
                "To make blockchains more secure, there is a P2P network (peer 2 peer network). Everyone gets their own copy of the blockchain and when a new block is created, it is verified by every one person’s blockchain to agree on which blocks are valid or not. \n" 
              }
              heading={"WHAT IS BLOCKCHAIN"}
            />
          </TabPanel>
          <TabPanel>
            <LessonQuestion heading={"WHAT IS BLOCKCHAIN"} question={"What is Blockchain?"} prewrittenAnswer={"Blockchain is a decentralized, immutable ledger technology used for secure and transparent recording of transactions across multiple parties."}/>
          </TabPanel>
          <TabPanel>
            <Lesson content={
              "Smart contracts are just like contracts in the real world, except it is completely digital. Smart contracts are essentially tiny programs stored inside a blockchain.\n \n "+
              "A common example is fundraising. Let's say you have a group of people who want to fund a project. Kickstarter serves as a middleman, ensuring the people’s money goes to the project / they get a refund should the project fail and ensuring people running the project get their money. \n \n " + 
              "This, however, can be replaced by a smart contract, therefore eliminating the need for a third party. We can program a smart contract to accept money from the people and pass the money to the project only if it succeeds." + 
              "And because this transaction is stored inside a blockchain, they are distributed and can’t be changed (refer back to lesson one about hashing!) \n \n" +
              "Some applications of this could be to make royalty payments easier for the music industry and banks could use it to issue loans. "
            } 
            
            heading={"WHAT ARE SMART CONTRACTS"}/>
          </TabPanel>
          <TabPanel>
            <LessonQuestion heading={"WHAT IS SMART CONTRACTS"} question={"What is a smart contract?"} prewrittenAnswer={"Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met."}/>
          </TabPanel>

          <TabPanel>
            <LessonAward props={1}/>
          </TabPanel>

        </TabPanels>
      </HStack>
    </Tabs>
    </ChakraProvider>
  );
}
export default Lessons;