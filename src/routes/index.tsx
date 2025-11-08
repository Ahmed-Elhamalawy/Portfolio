import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Resume from "../Pages/Resume";
import Projects from "../Pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, path: "Home", element: <Home /> }, // default route
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);
