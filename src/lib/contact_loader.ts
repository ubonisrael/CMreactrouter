import { LoaderFunction } from "react-router-dom";
import { getContact } from "./contacts";

//loader function for a single contact
export const loader: LoaderFunction = async ({ params }) => {
    const contact = params.contactId ? await getContact(params.contactId) : "";
    if (!contact) {
      throw new Response("", {
        status: 404,
        statusText: "Contact Not Found",
      });
    }
    return { contact };
  };