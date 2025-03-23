import axios from "axios";
import dotenv from "dotenv";
import readlineSync from "readline-sync";

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

if (!GEMINI_API_KEY) {
    console.error("❌ Error: GEMINI_API_KEY is missing. Please add it to your .env file.");
    process.exit(1);
}

console.log("🤖 Start chatting with Gemini! Type 'exit' to quit.");

async function chatWithGemini(userMessage) {
    try {
        const response = await axios.post(GEMINI_API_URL, {
            contents: [{ parts: [{ text: userMessage }] }]
        });

        const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response received.";
        return aiResponse;
    } catch (error) {
        console.error("❌ Gemini API Error:", error.response?.data || error.message);
        return "⚠️ Error communicating with Gemini.";
    }
}

// Continuous Chat Loop
while (true) {
    const userInput = readlineSync.question("\nYou: ");
    if (userInput.toLowerCase() === "exit") {
        console.log("👋 Exiting chat. Goodbye!");
        break;
    }

    console.log("\nThinking...");
    const aiReply = await chatWithGemini(userInput);
    console.log(`\nGemini: ${aiReply}`);
}
