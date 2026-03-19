import { useState } from "react";
import axios from "axios";

export default function AIBox({ workouts }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAI = async () => {
    setLoading(true);

    const total = workouts.length;
    const totalMinutes = workouts.reduce((sum, w) => sum + w.duration, 0);

    const prompt = `
    User workout summary:
    - Total workouts: ${total}
    - Total minutes: ${totalMinutes}

    Give a short motivational message based on this data.
    Keep it friendly and personalized.
    `;

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=AIzaSyDvqCuGCA7E5arNvwy55oPYxj8V77_XGFw`,
        {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }
      );

      const aiText =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      setResponse(aiText);    
    } catch (err) {
      console.log(err);
      setResponse("Error generating response");
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#1f2937] p-6 rounded-xl w-full max-w-md mt-6">
      <h2 className="text-[#0ea5e9] mb-3">AI Coach</h2>

      <button
        onClick={generateAI}
        className="bg-[#0ea5e9] px-4 py-2 rounded mb-3"
      >
        {loading ? "Thinking..." : "Get AI Motivation"}
      </button>

      {response && <p className="text-gray-300 mt-2">{response}</p>}
    </div>
  );
}
