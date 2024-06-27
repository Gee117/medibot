import React, { useState } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from 'openai';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const configuration = new Configuration({
    apiKey: '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',
  });
  
  const openai = new OpenAIApi(configuration);

  async function main(a1) {  
    return {
      "id": "chatcmpl-6sHnRLzMVcNnTxkP7Up7Jv0AJ3eFZ",
      "object": "chat.completion",
      "created": 1689924234,
      "model": "gpt-3.5-turbo",
      "choices": [
        {
          "message": {
            "role": "assistant",
            "content": "This is a test response from the chatbot."
          },
          "finish_reason": "stop",
          "index": 0
        }
      ],
      "usage": {
        "prompt_tokens": 9,
        "completion_tokens": 7,
        "total_tokens": 16
      }
    }

    const response = await openai.createChatCompletion({  
      model: 'gpt-3.5-turbo',
      messages: [{ role: "user", content: a1 }],
      stream: true,
    });

    let botResponse = '';

    for await (const chunk of response.data) {  
      const content = chunk.choices[0]?.delta?.content || '';
      botResponse += content;
    }

    return botResponse;
  }
  
  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await main(input);  
      const botResponse = response.choices[0].message.content.trim();  
      const botMessage = { sender: 'bot', text: botResponse };  
      setMessages([...newMessages, botMessage]);
    } 
    catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      const botMessage = { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' };
      setMessages([...newMessages, botMessage]);
    }
  };

  return (
    <div className="App">
      <h1>MediBot</h1>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default App;
