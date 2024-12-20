import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    navigate("/chat", { state: { username, roomCode } });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundColor: "rgb(15, 23, 43)" }}
    >
      <form
        onSubmit={handleJoinRoom}
        className="w-full max-w-md bg-blue-950/[0.6] p-6 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Join Chat Room
        </h1>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Enter Room Code"
          value={roomCode}
          required
          onChange={(e) => setRoomCode(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
          Join Room
        </button>
      </form>
    </div>
  );
};

export default JoinRoom;
