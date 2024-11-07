import { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export function useAI() {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: string) => {
    setIsLoading(true);
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a helpful career guidance assistant. Provide accurate, encouraging advice about career paths, education requirements, and skill development.'
          },
          { role: 'user', content: message }
        ],
        model: 'gpt-3.5-turbo',
      });

      return completion.choices[0]?.message?.content || 'No response available';
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
}