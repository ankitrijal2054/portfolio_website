import React, { useState, useEffect } from "react";
import "../styles/Chat.css"; // Import chatbot styles
import embeddingsData from "../data/embeddings.json"; // Local embeddings
import * as math from "mathjs"; // Math functions for cosine similarity

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [embedder, setEmbedder] = useState(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const API_URL =
    "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct";
  const API_KEY = "api_key"; // Keep the API key here for now

  // 🔹 Load the embedding model only once
  useEffect(() => {
    async function loadModel() {
      try {
        console.log("🔄 Loading embedding model...");
        const transformers = await import("@xenova/transformers"); // Ensure proper import
        const pipeline = transformers.pipeline; // Assign pipeline function
        const model = await pipeline(
          "feature-extraction",
          "Xenova/all-MiniLM-L6-v2"
        );
        setEmbedder(() => model);
        setIsModelLoaded(true);
        console.log("✅ Model loaded successfully!");
      } catch (error) {
        console.error("❌ Error loading embedding model:", error);
      }
    }
    loadModel();
  }, []);

  // 🔹 Function to compute cosine similarity
  const cosineSimilarity = (vecA, vecB) => {
    return math.dot(vecA, vecB) / (math.norm(vecA) * math.norm(vecB));
  };

  // 🔹 Function to retrieve the most relevant data based on query
  const retrieveRelevantInfo = async (query) => {
    if (!isModelLoaded || !embedder) {
      console.warn("🚨 Model is still loading, blocking query...");
      return "The model is still loading. Please try again.";
    }

    try {
      console.log("🔍 Generating query embedding...");
      const queryEmbedding = await embedder(query, {
        pooling: "mean",
        normalize: true,
      });

      let bestMatch = { text: "", score: -1 };
      embeddingsData.embeddings.forEach((embedding, index) => {
        let score = cosineSimilarity(queryEmbedding.data, embedding);
        if (score > bestMatch.score) {
          bestMatch = { text: embeddingsData.data[index], score };
        }
      });

      console.log("✅ Best matching context retrieved:", bestMatch.text);
      return bestMatch.text || "I couldn't find relevant info.";
    } catch (error) {
      console.error("❌ Error processing embeddings:", error);
      return "Error retrieving relevant information.";
    }
  };

  // 🔹 Function to send message and get AI response
  const sendMessage = async () => {
    if (!input.trim() || !isModelLoaded) return;
    setLoading(true);

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      console.log("🧠 Retrieving relevant context...");
      const context = await retrieveRelevantInfo(input);

      // 🚀 Fixing AI prompt format
      const fullPrompt =
        context && context !== "The model is still loading. Please try again."
          ? `Context: ${context}\n\nUser question: ${input}\n\nAnswer concisely based on the provided context.`
          : input;

      console.log("📝 Final prompt sent to AI:", fullPrompt);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ inputs: fullPrompt }),
      });

      const data = await response.json();
      const botResponse =
        data[0]?.generated_text || "Sorry, I couldn't understand.";

      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("❌ Error fetching response:", error);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Error fetching response." },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        💬 Chat
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>Chat with Ankit's AI</h3>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="chat-box">
            {messages.map((msg, index) => (
              <p key={index} className={msg.sender}>
                <strong>{msg.sender === "user" ? "You" : "AI"}:</strong>{" "}
                {msg.text}
              </p>
            ))}
            {loading && <p className="bot">AI: Thinking...</p>}
          </div>
          <input
            type="text"
            placeholder={
              isModelLoaded ? "Ask something..." : "Loading model..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={!isModelLoaded || loading}
          />
          <button onClick={sendMessage} disabled={!isModelLoaded || loading}>
            {loading ? "Loading..." : "Send"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Chat;
