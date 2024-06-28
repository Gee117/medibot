import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const apiKey = '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';

  const main = async (a1) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: a1 }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error in main function:', error);
      throw error;
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await main(input);
      console.log('API Response:', response);
      if (response && response.choices && response.choices[0] && response.choices[0].message) {
        const botResponse = response.choices[0].message.content.trim();
        const botMessage = { sender: 'bot', text: botResponse };
        setMessages([...newMessages, botMessage]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
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
