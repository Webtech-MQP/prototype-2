import * as dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

const API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function summarize(note: string): Promise<string> {
    const prompt = `Summarize this to state why the patient has to come in:\n\n${note}`;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text?.trim() || '';
    // return note;
}
