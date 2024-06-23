import dotenv from 'dotenv';

dotenv.config();

console.log('Loaded Environment Variables:', process.env);
console.log('API Key:', process.env.OPENAI_API_KEY);
