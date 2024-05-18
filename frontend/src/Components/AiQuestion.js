const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: "FDZGRUFzO3ChEAmnf76uJrPNHbIgV9ai8pTltdAS", // This is your trial API key
});

async function checkAnswer(question, prewrittenAnswer, userAnswer) {
  const stream = await cohere.chatStream({
    model: "command-r-plus",
    message: "Are these two answers to the question \'" + question + "\' similar? Answer Yes or No." + "\n1. " + prewrittenAnswer + "\n2. " + userAnswer,
    temperature: 0.3,
    chatHistory: [{"role": "User", "message": "Are these two answers to the question \"What is a smart contract\" similar? Answer Yes or No\n1. Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met.\n2. Smart contracts are contracts connected to the chain and when conditions are filled, will run code to give the user cryptocurrency."}, {"role": "Chatbot", "message": "Yes."}, {"role": "User", "message": "Are these two answers to the question \"What is a smart contract\" similar? Answer Yes or No\n1. Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met.\n2. Smart contracts are edible and elephants use them to buy bitcoin."}, {"role": "Chatbot", "message": "No."}],
    promptTruncation: "AUTO",
    connectors: [{"id":"web-search"}]
  });

  let response = "";

  for await (const chat of stream) {
    if (chat.eventType === "text-generation") {
      response+=chat.text;
    }
  }

  if(response.toLowerCase() === "yes." || response.toLowerCase() === "yes") {
    return 1;
  }
  else if(response.toLowerCase() === "no." || response.toLowerCase() === "no") {
    return 0;
  }
}

// Temporary parameters
const question = "What is a smart contract?";
const prewrittenAnswer = "Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met.";
const userAnswer = "Smart contracts are contracts connected to the chain and when conditions are filled, will run code to give the user cryptocurrency.";

// MAKE A LOADING SCREEN SAYING "ANALYZING RESPONSES!!!"

// This is how you call the async function
checkAnswer(question, prewrittenAnswer, userAnswer)
  .then(result => {
    if (result === 1) {
      console.log("The answers are similar.");
    } else if (result === 0) {
      console.log("The answers are not similar.");
    } else {
      console.log("Unable to determine similarity.");
    }
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
