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
import { loader as editLoader, action as editAction } from './routes/editcontact.tsx'
import { loader as contactLoader, action as contactAction } from './routes/contact.tsx'
import { action as deleteAction} from './routes/delete.tsx'
import ContactPage from "./routes/contact.tsx";
import EditContact from "./routes/editcontact.tsx";

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
          },
          {
            path: '/contacts/:contactId',
            element: <ContactPage />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: '/contacts/:contactId/edit',
            element: <EditContact />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: '/contacts/:contactId/delete',
            action: deleteAction,
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
