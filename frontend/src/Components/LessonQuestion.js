import React, { useState, useEffect } from 'react';
import { ChakraProvider, Input, Box, Button, Heading, Text, Spinner } from '@chakra-ui/react';
import { checkAnswer } from "./AiQuestion";

export default function LessonQuestion(props) {
    // variables
    const MAX_WORDS = 20;
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState(null); // Assuming you have a state to store the result
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const inputWords = event.target.value.split(" ");
        if (inputWords.length > MAX_WORDS) {
            // If the number of words exceeds the limit, trim the input
            event.target.value = inputWords.slice(0, MAX_WORDS).join(" ");
        }
        setAnswer(event.target.value);
    };

    const handleAnswerSubmit = async () => {
        try {
            setLoading(true);
            // Call the checkAnswer function with the provided arguments
            const similarity = await checkAnswer(props.question, props.prewrittenAnswer, answer);
            // Update the result state based on the similarity result
            setResult(similarity);
        } catch (error) {
            console.error('Error checking answer:', error);
            // Handle any errors that occur during the function call
        }
    };

    useEffect(() => {
        setLoading(false);
      }, [result]);
    

    return (
        <ChakraProvider>
            <Heading as='h1' size='2xl' pb={10} noOfLines={1}>{props.heading}</Heading>

            <Box bg="gray.200" borderRadius={20} width={1200} height={800} my={20} p={12}>
                <Text fontSize="2xl" whiteSpace="pre-line" width='100%' mb={10}>
                    {props.question + " (within 20 words)"}
                </Text>
                <Input value={answer} onChange={handleChange} maxLength={MAX_WORDS * 8} placeholder="Type Answer Here" variant='filled' focusBorderColor={"#6868F7"} size="lg" />

                <Button onClick={handleAnswerSubmit} bg="#6868F7" my={30}>Submit Answer</Button>

                {/* Display result if available */}
                <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="20%">
                    {loading && (
                    <Spinner
                        thickness='4px'
                        speed='1.00s'
                        emptyColor='gray.100'
                        color='#6868F7'
                        size='xl'
                    />
                    )}
                    {result === 1 && loading === false && (
                    <Text mt={4} mb={10} color="#6868F7" as='b' fontSize='5xl'>You are CORRECT!</Text>
                    )}
                    {result === 0 && loading === false && (
                    <Text mt={4} color="#6868F7" as='b' fontSize='5xl'>You are WRONG!</Text>
                    )}
                </Box>
            </Box>
        </ChakraProvider>
    );
};
