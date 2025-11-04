import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({apiKey: process.env.API_KEY!});

/**
 * A generic function to call the Gemini API.
 * @param modelName The model to use.
 * @param prompt The user prompt.
 * @returns The generated text.
 */
export async function callGemini(modelName: string, prompt: string): Promise<string> {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error(`Error calling Gemini API for model ${modelName}:`, error);
        throw new Error('Failed to get a response from the AI model.');
    }
}
