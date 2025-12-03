import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.VITE_GEMINI_API_KEY;
const modelName = 'gemini-1.5-flash';

console.log(`Testing Gemini API with model: ${modelName}`);
console.log(`API Key present: ${!!apiKey}`);

if (!apiKey) {
    console.error("Error: VITE_GEMINI_API_KEY not found in .env");
    process.exit(1);
}

async function testGemini() {
    try {
        const ai = new GoogleGenAI({ apiKey });
        const chat = ai.chats.create({ model: modelName });
        const result = await chat.sendMessage({ message: "Hello, are you working?" });
        console.log("Response success!");
        console.log("Response text:", result.response.text());
    } catch (error) {
        console.error("Error testing Gemini API:", error);
    }
}

testGemini();
