import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";


const chatDataset = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good evening"],
    response: "Hello 👋 Welcome to our real estate platform! How can I assist you today?"
  },
  {
    keywords: ["buy", "purchase", "house for sale", "homes for sale"],
    response: "We have a variety of houses for sale in Nairobi, Westlands, and Kilimani."
  },
  {
    keywords: ["rent", "rental", "apartments for rent", "houses to rent"],
    response: "We offer affordable rental apartments and houses in different locations. You can filter by location."
  },
  {
    keywords: ["price", "cost", "how much", "budget"],
    response: "Prices vary depending on location and property type. Rentals start from affordable monthly rates, while sales depend on size and area."
  },
  {
    keywords: ["nairobi", "location", "areas", "where"],
    response: "We currently have properties in Nairobi, Westlands, Kilimani, and surrounding areas."
  },
  {
    keywords: ["viewing", "visit", "schedule", "appointment"],
    response: "You can schedule a property viewing anytime. Just click on a property and request a visit."
  },
  {
    keywords: ["contact", "agent", "support"],
    response: "You can reach our agents through the contact page or chat here anytime for assistance."
  },
  {
    keywords: ["mortgage", "loan", "finance", "payment plan"],
    response: "We can connect you with mortgage partners to help you finance your property purchase."
  },
  {
    keywords: ["luxury", "premium", "high end"],
    response: "We offer luxury homes including villas and modern apartments in prime locations like Kilimani and Westlands."
  },
  {
    keywords: ["thank you", "thanks", "bye", "goodbye"],
    response: "You're welcome 😊 If you need anything else, feel free to ask anytime!"
  },

   {
    keywords: ["house", "home", "apartments"],
    response: "Please find your preffered house by filtering "
  }


];


const SimpleChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your assistant. How can I help?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = getBotReply(input);

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  const getBotReply = (userInput) => {
  const text = userInput.toLowerCase();

  for (let item of chatDataset) {
    if (item.keywords.some(keyword => text.includes(keyword))) {
      return { sender: "bot", text: item.response };
    }
  }

  return {
    sender: "bot",
    text: "Sorry, I don't understand that yet. Try asking about products or help."
  };
};
  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={styles.chatButton}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatContainer}>
          
          <div style={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#cce5ff" : "#e2e3e5"
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              style={styles.input}
            />

            <button onClick={sendMessage} style={styles.button}>
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
};

const styles = {
  chatContainer: {
    width: "300px",
    height: "400px",
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
    position: "fixed",
    right: "20px",
    bottom: "90px",
    zIndex: 1000
  },

  messages: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    flexGrow: 1,
    gap: "5px",
    marginBottom: "10px"
  },

  message: {
    padding: "8px 12px",
    borderRadius: "15px",
    maxWidth: "80%"
  },

  inputContainer: {
    display: "flex",
    gap: "5px"
  },

  input: {
    flexGrow: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },

  button: {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#0d6efd",
    color: "white",
    cursor: "pointer"
  },

  chatButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#0d6efd",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1001,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default SimpleChatbot;