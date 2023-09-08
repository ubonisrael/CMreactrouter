import { ActionFunction } from "react-router-dom";
import { updateContact } from "./contacts";

//action function for a single contact
export const action: ActionFunction = async ({ params, request }) => {
    const formData = await request.formData();
    if (!params.contactId) return;
    return updateContact(params.contactId, {
      favorite: `${formData.get("favorite") === "true"}`,
    });
  };