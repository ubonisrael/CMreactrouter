import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";
import ErrorPage from "./components/error-page.tsx";
import Index from "./routes/index.tsx";
import AddContact from "./routes/addcontact.tsx";
import { loader as rootLoader } from './components/contactlist.tsx'
import { action as addAction } from './routes/addcontact.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {index:true, element: <Index />},
          {
            path: '/add/',
            element: <AddContact />,
            action: addAction
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
