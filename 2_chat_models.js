
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";
import * as dotenv from 'dotenv';
dotenv.config();  // requires config to use .env


// creating large language model (LLM)
const chat_model = new ChatOpenAI({

//  openAIApiKey: "", // if you dont want to store it as environment variable-> npm i dotenv
  temperature: 0,   // lies between 0 to 1 -> near to 1 means more randomness/creativity
});

const result = await chat_model.predictMessages([
  new HumanMessage("Translate this sentence from English to French. Long Live France.")
]); // call as well as predict
console.log(result);
