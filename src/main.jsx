import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Body from "./components/Body/index.jsx";

// const path = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/home",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <div>About</div>,
//       },
//       {
//         path: "/contact",
//         element: <div>Contact</div>,
//       },
//       {
//         path: "/work",
//         element: <div>Work</div>,
//       },
//       {
//         path: "/projects",
//         element: <div>Projects</div>,
//       },
//       {
//         path: "/download",
//         element: <div>Download</div>,
//       },
//     ],
//   },
//   {
//     path: "/*",
//     element: <div>404</div>,
//   },
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={path} /> */}
    <App />
  </StrictMode>
);
