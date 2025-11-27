
import { GoogleGenAI } from "@google/genai";
import { GEMINI_MODEL } from '../constants';
import { getPortfolioContext } from '../data/caseStudies';
import { getAboutMeContext } from '../data/aboutMe';

const portfolioContext = getPortfolioContext();
const aboutMeContext = getAboutMeContext();

const SYSTEM_INSTRUCTION = `You are a helpful and friendly chatbot for a Product and Service Designer's portfolio. Your name is Sparky.
Answer the user's questions based on the provided portfolio context, which includes case studies and information about the designer.
Be conversational and professional.
Keep your answers concise and to the point.
If you don't know the answer based on the context, say that you don't have information on that topic.
Do not make up information.

Here is the portfolio content:
---
${aboutMeContext}
---
${portfolioContext}
---
`;

export const streamChatResponse = async (history: { role: 'user' | 'model'; parts: { text: string }[] }[], newMessage: string) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY not set. Using mock response.");
    // Mock response for demonstration/development
    return (async function* () {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      const mockResponses = [
        "I'm currently running in demo mode because my API key hasn't been set up yet.",
        "That's a great question! In a full deployment, I would use Gemini to answer that based on Chinmay's portfolio.",
        "I can tell you that Chinmay is a Product & Service Designer with a knack for AI integration.",
        "Feel free to explore the case studies to see more of his work!"
      ];
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];

      // Stream the response character by character for effect
      const chunkSize = 5;
      for (let i = 0; i < randomResponse.length; i += chunkSize) {
        await new Promise(resolve => setTimeout(resolve, 50));
        yield { text: randomResponse.slice(i, i + chunkSize) };
      }
    })();
  }

  const ai = new GoogleGenAI({ apiKey });

  const chat = ai.chats.create({
    model: GEMINI_MODEL,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
    history: history,
  });

  const result = await chat.sendMessageStream({ message: newMessage });
  return result;
};
