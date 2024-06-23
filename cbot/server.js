import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end(); 
    return;
  }

  const { message } = req.body;

  if (!message) {
    res.status(400).json({ error: 'No message provided' });
    return;
  }

  try {
    console.log('Received message:', message);

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 150,
    });

    console.log('OpenAI response:', response.data);

    const reply = response.data.choices[0].text.trim();
    res.status(200).json({ reply });
  } catch (error) {
    console.error('Error generating response:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error generating response' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
