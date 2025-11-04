import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import AdminCard from '../../components/Admin/AdminCard';
import Spinner from '../../components/Spinner';
import { useNotification } from '../../contexts/NotificationContext';

const AdminSmsPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedSms, setGeneratedSms] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addNotification } = useNotification();

  const handleGenerateSms = async () => {
    if (!prompt.trim()) {
      addNotification('Please enter a prompt for the SMS.', 'error');
      return;
    }
    if (!process.env.API_KEY) {
        addNotification('API Key is not configured.', 'error');
        return;
    }

    setIsLoading(true);
    setGeneratedSms('');

    try {
      // Fix: Always use new GoogleGenAI({apiKey: process.env.API_KEY});
      const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
      const systemInstruction = `You are an expert SMS marketing copywriter for a toy store in Bangladesh called "KhelaGhor". 
      Generate a concise, friendly, and effective SMS message based on the user's prompt. 
      The message MUST be under 160 characters. Use emojis where appropriate. 
      Start the message with "KhelaGhor:".`;
      
      // Fix: Use ai.models.generateContent
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });
      
      // Fix: Use response.text to get the text
      const text = response.text;
      setGeneratedSms(text.trim());
      addNotification('SMS content generated!', 'success');
    } catch (error) {
      console.error("Error generating SMS:", error);
      addNotification('Failed to generate SMS. Please check the console.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminCard title="AI-Powered SMS Marketing">
      <div className="space-y-6">
        <div>
          <label htmlFor="sms-prompt" className="block text-sm font-medium text-gray-700">
            What's the goal of your SMS campaign? (e.g., "weekend flash sale", "new LEGO arrivals")
          </label>
          <input
            type="text"
            id="sms-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Announce a 20% discount on all Barbie dolls"
            className="mt-1 block w-full border-2 border-black rounded-md p-2"
          />
        </div>

        <button
          onClick={handleGenerateSms}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? 'Generating...' : 'Generate SMS Content'}
        </button>

        {isLoading && <Spinner />}
        
        {generatedSms && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Generated SMS Preview:</h3>
            <div className="mt-2 p-4 bg-gray-100 border rounded-md">
              <p className="font-mono">{generatedSms}</p>
              <p className="text-sm text-gray-500 mt-2">Character count: {generatedSms.length}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Send to All Customers
            </button>
          </div>
        )}
      </div>
    </AdminCard>
  );
};

export default AdminSmsPage;