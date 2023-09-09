import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";
import ErrorPage from "./components/error_page.tsx";
import Index from "./routes/index.tsx";
import AddContact from "./routes/addcontact.tsx";
import { loader as rootLoader } from "./lib/contacts_loader.ts";
import { action as addAction } from "./lib/addcontact_action.ts";
import { action as editAction } from "./lib/editcontact_action.ts";
import { loader as editLoader } from "./lib/editcontact_loader.ts";
import { loader as contactLoader } from "./lib/contact_loader.ts";
import { loader as favoriteLoader } from "./lib/favorites_loader.ts";
import { action as contactAction } from "./lib/contact_action.ts";
import { action as selectAction } from "./lib/select.ts";
import { action as deleteAction } from "./lib/delete.ts";
import { action as multideleteAction } from "./lib/multidelete.ts";
import ContactPage from "./routes/contact.tsx";
import EditContact from "./routes/editcontact.tsx";
import { Theme } from "@radix-ui/themes";
import Favorites from "./routes/favorites.tsx";
import UnavailableFeature from "./components/unavailable_feature.tsx";

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
          { index: true, element: <Index />, loader: rootLoader },
          {
            path: "/favorites",
            element: <Favorites />,
            loader: favoriteLoader,
          },
          {
            path: "/import",
            element: <UnavailableFeature />,
          },
          {
            path: "/merge",
            element: <UnavailableFeature />,
          },
          {
            path: "/add",
            element: <AddContact />,
            action: addAction,
          },
          {
            path: "/contacts/:contactId",
            element: <ContactPage />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: "/contacts/:contactId/delete",
            action: deleteAction,
          },
          {
            path: "/contacts/:contactId/multidelete",
            action: multideleteAction,
          },
          {
            path: "/contacts/:contactId/select",
            action: selectAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Theme>
  </React.StrictMode>
);
