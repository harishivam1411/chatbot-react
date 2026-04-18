import dayjs from "dayjs";
import { useState } from "react";
import LoadingSpinnerGif from "../assets/loading-spinner.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }

    setIsLoading(true);
    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingSpinnerGif} className="loading-spinner" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_message: inputText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Chatbot response:", data);

      setChatMessages([
        ...newChatMessages,
        {
          message: data.bot_response,
          sender: "robot",
          id: crypto.randomUUID(),
          time: dayjs().valueOf(),
        },
      ]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      const errorMessage = "Sorry, something went wrong. Please try again.";
      setChatMessages([
        ...newChatMessages,
        {
          message: errorMessage,
          sender: "robot",
          id: crypto.randomUUID(),
          time: dayjs().valueOf(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button onClick={clearMessages} className="clear-button">
        Clear
      </button>
    </div>
  );
}
