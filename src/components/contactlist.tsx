import { useLoaderData, NavLink, LoaderFunction } from "react-router-dom";
import { Contacts } from "../@types/app";
import { getContacts } from "../lib/contacts";
import ContactCard from "./contactcard";

export const loader: LoaderFunction = async({request}) => {
  const url = new URL(request.url)
  const search = url.searchParams.get('search') || undefined
  const contacts = await getContacts(search);
  return {contacts, search};
}

const ContactList = ({handleToggle}: {handleToggle: () => void}) => {
  const {contacts} = useLoaderData() as {contacts: Contacts};

  return (
    <section aria-label="contacts list" className="h-full overflow-y-scroll scrollbar dark:text-white px-2 py-1 rounded-md bg-white dark:bg-slate-800">
      <p className="uppercase font-medium">contacts</p>
      <div aria-hidden className="w-full h-0.5 px-1 bg-slate-800 dark:bg-white"></div>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((c) => (
            <li onClick={handleToggle} key={`${c.ID}`}>
              <NavLink to={`/contacts/${c.ID}`}>
                <ContactCard contact={c} />
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm uppercase p-2">you don't have any contact(s)</p>
      )}
    </section>
  );
};

export default ContactList;
