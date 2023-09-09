import { useLoaderData } from "react-router-dom";
import ContactList from "../components/contact_list";
import { Contacts } from "../@types/app";


const Favorites = () => {
  const { contacts } = useLoaderData() as { contacts: Contacts };

  return <ContactList contacts={contacts} type="favorite" />
};

export default Favorites;
