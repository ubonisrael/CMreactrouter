import { ActionFunction, redirect } from "react-router-dom";
import { createContact } from "./contacts";
import { randomId } from "./randomId";

export const action: ActionFunction = async({ request }) => {
    const formData = await request.formData();
    const contact = Object.fromEntries(formData);
    contact.ID = `${contact.firstname}${randomId()}`;
    contact.selected = `${false}`
    await createContact(contact);
    return redirect("/");
  }