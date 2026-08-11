import { createRoot } from "react-dom/client";
import "./styles/index.css";
import routes from "./app/routes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);