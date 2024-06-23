import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

console.log('Loaded Environment Variables:', process.env); // Debugging line

console.log('API Key:', process.env.OPENAI_API_KEY); // Debugging line

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const testApiKey = async () => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'This is a test prompt.',
      max_tokens: 5,
    });

    console.log('API Key is valid. Here is a sample response:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.status, error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
};

testApiKey();
console.log('API Key:', process.env.OPENAI_API_KEY);
