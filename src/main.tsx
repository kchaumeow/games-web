import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { gamesApi } from "./features/api/gamesSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={gamesApi}>
      <RouterProvider router={router}></RouterProvider>
    </ApiProvider>
  </React.StrictMode>,
);
