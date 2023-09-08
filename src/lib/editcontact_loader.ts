//loader function for editing contact

import { LoaderFunction } from "react-router-dom";
import { getContact } from "./contacts";

export const loader: LoaderFunction = async({ params }) => {
    if (!params.contactId) return
      const contact = await getContact(params.contactId);
      if (!contact) {
        throw new Response("", {
          status: 404,
          statusText: "Contact Not Found",
        });
      }
      return { contact };
    }