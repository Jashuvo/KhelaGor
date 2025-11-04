import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({apiKey: process.env.API_KEY!});

let chatInstance: Chat | null = null;

export function startChat(): Chat {
    if (!chatInstance) {
        chatInstance = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are a helpful and friendly chatbot for an online toy store called KhelaGhor.",
            },
        });
    }
    return chatInstance;
}

export async function sendMessage(chat: Chat, message: string): Promise<string> {
    try {
        const result: GenerateContentResponse = await chat.sendMessage({ message });
        return result.text;
    } catch (error) {
        console.error("Error sending chat message:", error);
        return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
}
