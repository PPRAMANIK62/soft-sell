import { env } from "@/env";
import { toast } from "sonner";

// System prompt to contextualize responses for SoftSell
const SOFTSELL_CONTEXT = `
You are SoftSell's AI assistant. Only answer questions about SoftSell and its services.

IMPORTANT INSTRUCTIONS:
- Keep all responses brief and to the point (2-3 sentences when possible)
- Use simple, direct language
- Avoid lengthy explanations unless specifically requested
- Prioritize clarity over comprehensiveness
- Use bullet points for lists instead of paragraphs

About SoftSell:
- SoftSell helps businesses recover value from unused software licenses through resale
- We buy licenses from businesses and sell them to others seeking discounts
- We handle Microsoft, Adobe, Oracle, SAP, Salesforce and other enterprise software
- Both perpetual and subscription licenses may qualify
- Customers typically recover 30-70% of original purchase price
- All transactions are secure with no upfront fees

Our Simple Process:
1. Upload License: Submit details through our secure portal
2. Get Valuation: Receive competitive offer within 24 hours
3. Get Paid: Get payment within 3 business days after approval

For non-SoftSell questions, briefly explain you can only provide information about our services.
`;

export const generateGeminiResponse = async (
  userMessage: string
): Promise<string> => {
  try {
    const response = await fetch(
      env.VITE_GEMINI_API_URL + "?key=" + env.VITE_GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: SOFTSELL_CONTEXT }],
            },
            {
              role: "model",
              parts: [
                {
                  text: "I understand. I'll only answer questions related to SoftSell and its services for software license reselling.",
                },
              ],
            },
            {
              role: "user",
              parts: [{ text: userMessage }],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 300,
            topP: 0.8,
            topK: 40,
          },
        }),
      }
    );

    const data = await response.json();

    if (
      !response.ok ||
      !data.candidates ||
      !data.candidates[0]?.content?.parts ||
      !data.candidates[0]?.content?.parts[0]?.text
    ) {
      console.error("API error:", data);
      throw new Error("Failed to get response from AI");
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    toast.error("Failed to get AI response. Please try again.");
    return "I'm sorry, I couldn't process your request. Please try again later.";
  }
};
