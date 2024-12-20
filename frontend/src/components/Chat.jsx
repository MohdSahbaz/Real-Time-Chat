import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL);

const Chat = () => {
  const { state } = useLocation();
  const { username, roomCode } = state || {};
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { username, roomCode, message });
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage("");
    }
  };

  useEffect(() => {
    // Join Room
    socket.emit("joinRoom", { username, roomCode });

    // Receive Messages
    const messageHandler = (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    };

    socket.on("receiveMessage", messageHandler);

    // Cleanup on unmount: Remove event listener and disconnect socket
    return () => {
      socket.off("receiveMessage", messageHandler); // Remove event listener
    };
  }, [roomCode, username]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundColor: "rgb(15, 23, 43)" }}
    >
      <div className="w-full max-w-lg bg-blue-950/[0.6] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Chat Room
        </h1>

        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <p className="text-white text-xl">Welcome, {username}!</p>
          <p className="text-white text-sm">Room Code: {roomCode}</p>
        </div>

        <div className="mb-4 h-64 overflow-y-auto p-4 bg-gray-700 rounded-lg">
          {messages.map((msg, index) => (
            <div key={index} className="text-white mb-2">
              <div
                key={index}
                className="text-white mb-2"
                dangerouslySetInnerHTML={{ __html: msg }}
              />
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex items-center gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="w-full px-4 py-2 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
