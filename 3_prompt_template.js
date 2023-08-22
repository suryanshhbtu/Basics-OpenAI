import { PromptTemplate } from 'langchain/prompts';
import * as dotenv from 'dotenv';
dotenv.config();  // requires config to use .env

const template = "According to given data your name is {name}";
const prompt = PromptTemplate.fromTemplate(template); 
const formattedText = await prompt.format({
  name: "Suryansh Srivastava"
});

console.log(formattedText);
