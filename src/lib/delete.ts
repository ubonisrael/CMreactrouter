import { deleteContact } from "./contacts";
import { ActionFunction, redirect } from "react-router-dom";

export const action: ActionFunction = async({params}) => {
    if (!params.contactId) return
    await deleteContact(params.contactId)
    return redirect("/");
}