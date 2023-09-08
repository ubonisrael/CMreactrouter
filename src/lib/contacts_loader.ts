import { LoaderFunction } from "react-router-dom";
import { getContacts } from "./contacts";

export const loader: LoaderFunction = async({request}) => {
    const url = new URL(request.url)
    const search = url.searchParams.get('search') || undefined
    const contacts = await getContacts(search);
    return {contacts};
  }