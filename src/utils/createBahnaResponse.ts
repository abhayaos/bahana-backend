import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.OPENROUTER_API_KEY);
const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const createBahanaResponse = async (
  category: string,
  context: string,
  tone: string,
  who:string
) => {
  const prompt = `Generate ONE funny Gen-Z Nepali excuse (bahana).
The bahana should be grammatically and contextually correct and should be in roman Nepali.
The bahana should be short and should sound natural Gen-Z slang.
The bahana should be based on the given category, situation/context and tone.

Category: ${category}
Situation/context: ${context}
Tone: ${tone}
Exceuse to be given in front of: ${who}

Rules:

- write bahana for ${who} (like if who is "teacher" then write bahana/excuses to give infront of teacher , if who is "boss" then write bahana for boss  and so on)

- Strictly generate response according to the situation/context and tone provided — most important thing: be on context: ${context} and tone: ${tone}



- Write in roman Nepali, don't write random roman nepali, write in a way that it sounds natural and is grammatically as well as contextually correct
- Keep it short, sweet, readable — avoid using characters like different symbols like $ # / etc
- Sound natural Gen-Z slang
- No explanation — perfect understandable excuse only in nepali roman`;

  const modelName = process.env.AI_MODEL || "google/gemini-2.0-flash-001";

  const completion = await client.chat.completions.create({
    model: modelName,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
};