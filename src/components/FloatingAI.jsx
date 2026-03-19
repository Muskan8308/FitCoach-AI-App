import { useState } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai'

export default function FloatingAI() {

    const genAI = new GoogleGenerativeAI(
      "AIzaSyDvqCuGCA7E5arNvwy55oPYxj8V77_XGFw"
    );
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hey! I’m your AI Coach 💪" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updated = [...messages, { role: "user", text: input }];
    setMessages(updated);

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=AIzaSyDvqCuGCA7E5arNvwy55oPYxj8V77_XGFw",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:
                      "You are a fitness coach. Give short helpful answers.\nUser: " +
                      input,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      setMessages([...updated, { role: "ai", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...updated, { role: "ai", text: "AI error 😓" }]);
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-800 text-white px-4 py-3 rounded-full shadow-lg"
      >
        🤖
      </button>

      {/* Popup Chat */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-neutral-900 text-white rounded-2xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-3 border-b border-gray-700 flex justify-between">
            <span>AI Coach</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user" ? "bg-blue-600 ml-auto" : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 flex gap-2">
            <input
              className="flex-1 p-2 rounded bg-gray-800 outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button onClick={sendMessage} className="bg-blue-600 px-3 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
