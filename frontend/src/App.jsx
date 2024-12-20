import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import Chat from "./components/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/createroom",
    element: <CreateRoom />,
  },
  {
    path: "/joinroom",
    element: <JoinRoom />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
