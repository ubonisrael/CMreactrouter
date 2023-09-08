import { getContact, updateContact } from "./contacts";
import { ActionFunction, redirect } from "react-router-dom";

export const action: ActionFunction = async({params}) => {
    if (!params.contactId) return
    const contact = await getContact(params.contactId)
    if (contact) {
        contact.selected = contact.selected == 'true' ? 'false' : 'true'
        updateContact(params.contactId, contact)
        return redirect("/");
    } else {
        return
    }
}