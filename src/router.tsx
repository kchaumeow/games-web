import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Game.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Game />,
        path: "/games/:id",
      },
    ],
  },
]);
