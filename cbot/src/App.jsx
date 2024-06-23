import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      let botMessage = { sender: 'bot', text: '' };

      const userInput = input.toLowerCase().trim();
      switch (userInput) {
        case 'hi':
          botMessage.text = 'Hello, how can I help you?';
          break;
        case 'who are you':
          botMessage.text = "I am Geethika's new chatbot.";
          break;
        case 'how are you':
          botMessage.text = "I'm just a computer program, so I don't have feelings, but I'm here and ready to assist you! How can I help you today?";
          break; 
        case 'I need your help':
          botMessage.text="I'm ready to help you , let me know your query";
          break;
        case 'what is your functionality':
          botMessage.text = 'I can answer your questions and assist you with information related to health issues.';
          break;
        case 'what will you do':
          botMessage.text = 'I can answer your questions and assist you with information related to cardio health and diabetes.';
          break;
        case 'what is cardiovascular disease':
          botMessage.text = 'Cardiovascular disease (CVD) is a broad term used to describe a range of conditions that affect the heart and blood vessels. These diseases can lead to serious health problems, including heart attacks, strokes, and other complications.';
          break;
        case 'list out the types of cardiovascular disease':
          botMessage.text = '1. Coronary Artery Disease (CAD) 2. Heart Attack (Myocardial Infarction) 3. Heart Failure 4. Stroke 5. Arrhythmia 6. Peripheral Artery Disease 7. Aortic Disease 8. Hypertension (High Blood Pressure)';
          break;
        case 'what is meant by coronary artery disease':
          botMessage.text = 'Coronary Artery Disease is the most common type of heart disease. It occurs when the coronary arteries, which supply blood to the heart muscle, become narrowed or blocked due to the buildup of cholesterol and other substances (plaque).';
          break;
        case 'what is meant by heart attack (myocardial infarction)':
          botMessage.text = 'A heart attack occurs when a part of the heart muscle doesn\'t get enough blood flow. The more time that passes without treatment to restore blood flow, the greater the damage to the heart muscle.';
          break;
        case 'what is meant by heart failure':
          botMessage.text = 'This condition, also known as congestive heart failure, occurs when the heart is unable to pump blood effectively. It can result from conditions that overwork the heart, such as high blood pressure, diabetes, and coronary artery disease.';
          break;
        case 'what is a stroke':
          botMessage.text = 'A stroke happens when the blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. There are two main types of stroke: ischemic (caused by blockages) and hemorrhagic (caused by bleeding).';
          break;
        case 'what is meant by arrhythmia':
          botMessage.text = 'This refers to an irregular heartbeat. It can mean that the heart beats too fast, too slow, or with an irregular rhythm. Arrhythmias can affect how well the heart works and can be serious or even life-threatening.';
          break;
        case 'what is meant by peripheral artery disease (pad)':
          botMessage.text = 'PAD occurs when the arteries that supply blood to the limbs (usually the legs) become narrowed or blocked. It can cause pain and cramping, especially during physical activity.';
          break; 
        case 'what is an aortic disease':
          botMessage.text = 'This includes conditions like aortic aneurysm (a bulge in the wall of the aorta, the large blood vessel that carries blood from the heart to the rest of the body) and aortic dissection (a tear in the aorta\'s inner layer).'; 
          break;
        case 'what is meant by hypertension (high blood pressure)':
          botMessage.text = 'Often called the "silent killer" because it usually has no symptoms, high blood pressure can lead to serious cardiovascular complications like heart attack, stroke, and heart failure.';
          break;
        case 'what is the death rate due to cardiovascular diseases in india':
          botMessage.text = 'According to the World Health Organization (WHO), CVDs account for approximately 28% of all deaths in India. The Global Burden of Disease Study 2019 reported that nearly 2.6 million deaths in India were due to cardiovascular diseases.';
          break;
        case 'how can we prevent us from cardiovascular disease':
          botMessage.text = 'Preventing cardiovascular disease involves adopting a healthy lifestyle by eating a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats while limiting saturated and trans fats, salt, and added sugars. Regular physical activity, maintaining a healthy weight, avoiding smoking, and limiting alcohol intake are crucial. Managing stress through relaxation techniques and ensuring regular health check-ups to monitor blood pressure, cholesterol, and blood sugar levels can also help.';
          break;
        case 'which country has the highest death rate due to cardiovascular disease':
          botMessage.text = 'As of the most recent data, Russia has one of the highest death rates due to cardiovascular disease. Various factors contribute to this, including high prevalence of smoking, poor diet, high alcohol consumption, and inadequate healthcare infrastructure. Other countries with high cardiovascular disease death rates include Ukraine, Kazakhstan, and certain Eastern European and Central Asian nations. The high rates in these regions are often attributed to similar lifestyle and healthcare challenges.';
          break;
        case 'what are the symptoms of having cardiovascular disease':
          botMessage.text = 'Symptoms of cardiovascular disease (CVD) vary but commonly include chest pain or discomfort, shortness of breath, fatigue, and palpitations. Heart attacks present as severe chest pain, sweating, nausea, and dizziness. Heart failure symptoms include persistent shortness of breath, swelling in the legs, and rapid weight gain. Arrhythmias may cause palpitations, dizziness, and fainting. Stroke symptoms are sudden numbness or weakness, confusion, trouble speaking, and severe headache. Peripheral artery disease often causes leg pain and sores that won\'t heal. If these symptoms occur, especially those of a heart attack or stroke, seek immediate medical attention.';
          break;
        case 'how does diet affect heart health':
          botMessage.text = 'Diet significantly affects heart health by influencing risk factors for cardiovascular disease. A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can lower blood pressure, cholesterol levels, and reduce inflammation. Conversely, a diet high in saturated and trans fats, salt, and added sugars can increase the risk of developing heart disease by promoting plaque buildup in the arteries, raising blood pressure, and contributing to obesity. Making healthy dietary choices is crucial for maintaining cardiovascular health and preventing heart disease.';
          break;
        case 'how important is exercise for heart health':
          botMessage.text = 'Exercise is crucial for heart health as it helps lower blood pressure, improves cholesterol levels, strengthens the heart muscle, and enhances circulation. Regular physical activity also aids in maintaining a healthy weight, reducing the risk of obesity-related heart conditions. It helps manage stress, which can positively impact heart health. Overall, engaging in regular exercise significantly reduces the risk of developing cardiovascular diseases and improves overall cardiovascular function and well-being.';
          break;
        case 'what is diabetes':
          botMessage.text = 'Diabetes is a chronic condition characterized by high blood sugar levels due to the body\'s inability to produce enough insulin or use it effectively. There are three main types: Type 1 diabetes, an autoimmune disease requiring daily insulin injections; Type 2 diabetes, the most common form, often linked to lifestyle factors and managed through diet, exercise, and medication; and gestational diabetes, which occurs during pregnancy and increases the risk of Type 2 diabetes later. Without proper management, diabetes can lead to severe complications like heart disease, kidney failure, nerve damage, and vision problems.';
          break;
        case 'what are the symptoms of diabetics':
          botMessage.text = 'Symptoms of diabetes include frequent urination, excessive thirst, extreme hunger, unexplained weight loss, fatigue, blurred vision, slow-healing sores, frequent infections, and areas of darkened skin, particularly around the neck and armpits. Type 1 diabetes symptoms can develop quickly, while Type 2 diabetes symptoms often develop more slowly and may go unnoticed for a long time. If you experience any of these symptoms, it\'s important to see a healthcare provider for evaluation and possible diagnosis.';
          break;
        case 'what causes diabetes':
          botMessage.text = 'Diabetes is caused by either the pancreas not producing enough insulin (Type 1 diabetes) or the body\'s cells becoming resistant to insulin (Type 2 diabetes). In Type 1 diabetes, an autoimmune reaction destroys insulin-producing beta cells in the pancreas, leading to insulin deficiency. The exact cause of this autoimmune response is not fully understood but involves genetic and environmental factors. Type 2 diabetes is primarily caused by lifestyle factors such as obesity, physical inactivity, and unhealthy diet, along with genetic predisposition. Both types can lead to high blood sugar levels, resulting in various health complications.';
          break;
        case 'what are the types of diabetics':
          botMessage.text = 'The main types of diabetes are: 1. Type 1 Diabetes: An autoimmune condition where the immune system attacks insulin-producing cells in the pancreas. 2. Type 2 Diabetes: The most common form, characterized by insulin resistance and often associated with obesity and lifestyle factors. 3. Gestational Diabetes: Develops during pregnancy and usually disappears after childbirth but increases the risk of developing Type 2 diabetes later in life.';
          break;
        case 'what is type 1 diabetes':
          botMessage.text = 'Type 1 diabetes is an autoimmune condition where the immune system mistakenly attacks and destroys insulin-producing beta cells in the pancreas. This results in little or no insulin production, requiring individuals to take insulin injections or use an insulin pump to manage blood sugar levels. It is typically diagnosed in children and young adults, but it can occur at any age. The exact cause of Type 1 diabetes is unknown, but it involves a combination of genetic and environmental factors. Without insulin, the body cannot properly utilize glucose, leading to high blood sugar levels and various health complications.';
          break;
        case 'what is type 2 diabetes':
          botMessage.text = 'Type 2 diabetes is a chronic condition characterized by insulin resistance, where the body\'s cells do not respond effectively to insulin. This leads to elevated blood sugar levels. It is the most common form of diabetes, often associated with obesity, physical inactivity, and poor diet. Type 2 diabetes can be managed through lifestyle changes such as a healthy diet, regular exercise, weight loss, and, if necessary, medications or insulin therapy. Early detection and management are crucial to prevent complications such as heart disease, kidney failure, and nerve damage.';
          break;
        case 'what is gestational diabetes':
          botMessage.text = 'Gestational diabetes is a type of diabetes that develops during pregnancy when the body cannot produce enough insulin to meet the increased needs. It usually resolves after childbirth but increases the risk of developing Type 2 diabetes later in life. Managing gestational diabetes involves monitoring blood sugar levels, eating a healthy diet, engaging in regular physical activity, and sometimes taking insulin or other medications. Proper management is essential to prevent complications for both the mother and the baby, such as preeclampsia, preterm birth, and high birth weight.';
          break;
        case 'what are the complications of diabetics':
          botMessage.text = 'Complications of diabetes can affect various organs and systems in the body. These include cardiovascular disease, nerve damage (neuropathy), kidney damage (nephropathy), eye damage (retinopathy), foot problems due to poor circulation and nerve damage, skin conditions, hearing impairment, and increased risk of Alzheimer\'s disease. Proper management of blood sugar levels through medication, diet, exercise, and regular medical check-ups can help prevent or delay these complications.';
          break;
        case 'how can we prevent us from diabetes':
          botMessage.text = 'Preventing diabetes, particularly Type 2 diabetes, involves adopting a healthy lifestyle. This includes maintaining a healthy weight, engaging in regular physical activity, eating a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats while limiting sugar and refined carbohydrates. Avoiding smoking and excessive alcohol consumption is also important. Regular monitoring of blood sugar levels and health check-ups can help detect prediabetes or diabetes early, allowing for timely intervention and management. For those with a family history of diabetes, these preventive measures are especially crucial.';
          break;
        case 'who has the highest rate of diabetes':
          botMessage.text = 'As of the most recent data, the countries with the highest rates of diabetes are often in the Middle East and North Africa regions, with Kuwait, Saudi Arabia, and Qatar among the top. The high prevalence in these regions is attributed to rapid urbanization, lifestyle changes, and genetic factors. Other countries with high diabetes rates include India, China, and the United States, driven by large populations and increasing rates of obesity and sedentary lifestyles.';
          break;
        case 'how does diet affect diabetes':
          botMessage.text = 'Diet plays a crucial role in managing and preventing diabetes. For individuals with diabetes, a balanced diet helps control blood sugar levels, maintain a healthy weight, and prevent complications. A diet high in fiber from fruits, vegetables, and whole grains can improve blood sugar control. Limiting refined carbohydrates, sugary foods, and drinks is essential to avoid spikes in blood sugar. Healthy fats, such as those from nuts, seeds, and olive oil, can be beneficial, while saturated and trans fats should be minimized. Regular meal timing and portion control are also important to manage diabetes effectively.';
          break;
        case 'how important is exercise for diabetes':
          botMessage.text = 'Exercise is crucial for managing diabetes as it helps lower blood sugar levels, improves insulin sensitivity, and aids in maintaining a healthy weight. Regular physical activity can prevent or delay the onset of Type 2 diabetes and reduce the risk of complications for those with diabetes. Exercise also improves cardiovascular health, reduces stress, and enhances overall well-being. Both aerobic exercises, such as walking, swimming, and cycling, and resistance training, like lifting weights, are beneficial. It is important to consult a healthcare provider before starting any new exercise regimen, especially for individuals with diabetes-related complications.';
          break;
        default:
          const response = await axios.post('http://localhost:5000/chat', { message: input });
          botMessage.text = response.data.reply;
      }

      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
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
