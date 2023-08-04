import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import MyTasks from "./Pages/Tasks/MyTasks.jsx";
import UpdateTask from "./Pages/Tasks/UpdateTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tasks",
        element: <MyTasks />,
      },
      {
        path: "/updateTask/:id",
        element: <UpdateTask />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>
);
