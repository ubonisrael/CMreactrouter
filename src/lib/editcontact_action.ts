import { ActionFunction, redirect } from "react-router-dom";
import { updateContact } from "./contacts";

//action function for editing contact
export const action: ActionFunction = async({
    request,
    params,
  }) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    if (!params.contactId) return
    updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`)
  }