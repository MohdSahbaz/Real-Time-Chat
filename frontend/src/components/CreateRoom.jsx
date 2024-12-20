import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateRoom = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const roomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
      navigate("/chat", { state: { username, roomCode } });
    } catch (error) {
      console.log("Somthing went wrong:", error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundColor: "rgb(15, 23, 43)" }}
    >
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md bg-blue-950/[0.6] p-6 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create Chat Room
        </h1>
        <input
          type="text"
          placeholder="Enter your username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
          Create Room
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
