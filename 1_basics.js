import { ChatOpenAI } from "langchain/chat_models/openai";
import * as dotenv from 'dotenv';
dotenv.config();  // requires config to use .env
// creating large language model (LLM)
const llm = new ChatOpenAI({

//  openAIApiKey: "", // if you dont want to store it as environment variable-> npm i dotenv
  temperature: 0.9,   // lies between 0 to 1 -> near to 1 means more randomness/creativity
});

const result = await llm.call("Who won IPL?"); // call as well as predict
// "Feetful of Fun"
console.log(result);
