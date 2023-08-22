import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';

import * as dotenv from 'dotenv';
dotenv.config();  // requires config to use .env

const llm = new OpenAI({
  temperature: 0.7
});

const template = "Who is the prome minister of {country} in {year}";
const prompt = PromptTemplate.fromTemplate(template); 

const llmchain = new LLMChain({
  llm:llm,
  prompt:prompt
})
const result = await llmchain.call({
  country: "India",
  year: "1967"
});
console.log(result);
