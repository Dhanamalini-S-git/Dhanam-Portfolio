import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const SYSTEM_PROMPT = `You are Dhanamalini's professional portfolio assistant. Your ONLY job is to answer questions about Dhanamalini S's professional background.

Here is Dhanamalini's professional information:

NAME: Dhanamalini S

EDUCATION:
- B.E. Computer Science (currently pursuing)

SKILLS:
- Frontend: React.js, JavaScript, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Languages: Java, Python
- Tools: Git, GitHub, Figma, Canva, Power BI, Excel
- Other: n8n Automation, Web Scraping

INTERNSHIPS:
1. Data Analytics Intern - Reccsar Pvt. Ltd. (Jan 2025 - Feb 2025)
2. Full Stack Developer Intern - Itech Academy (Feb 2025)
3. Mobile App Development Intern - Dot Com Infoway Ltd. (June 2025 - July 2025)
4. Campus Ambassador - Geeks for Geeks (Jan 2026 - Present)
5. FullStack AI Intern - ZelidTech (Jan 2026 - Apr 2026)

PROJECTS:
1. Donify - Smart donation platform (MongoDB, Node.js, React)
2. College Attendance Monitoring - BLE Beacon system (Java, SQL, Springboot)
3. Web Scraping Tool - Python-based (Python, BeautifulSoup, Pandas)
4. Connexa - Healthcare website (React, Node.js, MongoDB)

CERTIFICATIONS:
- Introduction to RAG - IBM SkillsBuild
- OCI Developer Professional - Oracle
- Generative AI Fundamentals - IBM SkillsBuild
- OCI AI Foundations Associate - Oracle

CONTACT:
- Email: dhanamalini80@gmail.com
- Phone: +91 8110902348
- Location: Virudhunagar, Tamilnadu
- LinkedIn: linkedin.com/in/dhanamalini-s/
- GitHub: github.com/Dhanamalini-S-git

FREELANCING: Available for Web development, Data analytics, n8n automation, Web scraping, UI/UX design

STRICT RULES:
1. ONLY answer about professional topics (skills, projects, internships, education, contact, certifications, freelancing)
2. If asked about personal life, relationships, family, age, salary, or anything non-professional, respond EXACTLY: "I'm sorry, I can only share Dhanamalini's professional information. Feel free to ask about her skills, projects, or experience! 😊"
3. Keep answers concise and friendly
4. Never make up information`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const PortfolioBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm Dhana's portfolio assistant. Ask me anything about her skills, projects, internships, or how to contact her!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Build conversation history for Gemini (skip the first greeting)
      const history = messages.slice(1).map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            contents: [
              ...history,
              { role: "user", parts: [{ text: userMessage.content }] },
            ],
            generationConfig: {
              maxOutputTokens: 500,
              temperature: 0.7,
            },
          }),
        }
      );

      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't process that. Please try again!";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Oops! Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 md:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            background: "#0A0F1E",
            border: "1px solid #00D4FF40",
            boxShadow: "0 0 40px #00D4FF20",
            height: "480px",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: "linear-gradient(135deg, #00D4FF, #0099FF)",
              color: "#0A0F1E",
            }}
          >
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <div>
                <p className="font-bold text-sm">Dhana's Assistant</p>
                <p className="text-xs opacity-75">Powered by Gemini ✨</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center mr-2 shrink-0 mt-1"
                    style={{
                      background: "#00D4FF20",
                      border: "1px solid #00D4FF40",
                    }}
                  >
                    <Bot size={14} style={{ color: "#00D4FF" }} />
                  </div>
                )}
                <div
                  className="max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
                  style={
                    msg.role === "user"
                      ? {
                          background: "linear-gradient(135deg,#00D4FF,#0099FF)",
                          color: "#0A0F1E",
                          borderBottomRightRadius: "4px",
                        }
                      : {
                          background: "#1A1F2B",
                          color: "#E2E8F0",
                          borderBottomLeftRadius: "4px",
                          border: "1px solid #00D4FF20",
                        }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center mr-2 shrink-0"
                  style={{
                    background: "#00D4FF20",
                    border: "1px solid #00D4FF40",
                  }}
                >
                  <Bot size={14} style={{ color: "#00D4FF" }} />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl"
                  style={{
                    background: "#1A1F2B",
                    border: "1px solid #00D4FF20",
                    borderBottomLeftRadius: "4px",
                  }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                          background: "#00D4FF",
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="px-3 py-3 flex gap-2 items-center"
            style={{
              borderTop: "1px solid #00D4FF20",
              background: "#0D1220",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about skills, projects..."
              className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
              style={{
                background: "#1A1F2B",
                border: "1px solid #00D4FF30",
                color: "#E2E8F0",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
              style={{
                background:
                  input.trim() && !loading
                    ? "linear-gradient(135deg,#00D4FF,#0099FF)"
                    : "#1A1F2B",
                color: input.trim() && !loading ? "#0A0F1E" : "#4B5563",
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg,#00D4FF,#0099FF)",
          color: "#0A0F1E",
          boxShadow: "0 0 20px #00D4FF50",
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
};

export default PortfolioBot;