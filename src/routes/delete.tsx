import { Params } from "../@types/app";
import { deleteContact } from "../lib/contacts";
import { redirect } from "react-router-dom";

export async function action({params}: {params: Params}) {
    await deleteContact(params.contactId)
    return redirect("/");
}