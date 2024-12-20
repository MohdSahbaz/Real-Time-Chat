import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundColor: "rgb(15, 23, 43)" }}
    >
      <div className="w-full max-w-lg bg-blue-950/[0.6] p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          QuickChat
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Connect with a friend instantly! Create or join a private chat room
          using a unique room code. Your conversations stay secure and private.
        </p>
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-sm mb-6">
          <strong>Note:</strong> This chat application does not store any user
          data. Ensure you securely share the room code with your partner.
        </div>
        <div className="text-center flex flex-col space-y-4">
          <Link
            to="/createroom"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            Create Room
          </Link>
          <Link
            to="/joinroom"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Join Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
