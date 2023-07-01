import { useLoaderData } from "react-router-dom";
import { Contact, Contacts } from "../@types/app";
import { getContacts } from "../lib/contacts";
import ContactCard from "./contactcard";

export async function loader() {
  const contacts = await getContacts()
  return contacts 
}

const ContactList = () => {
  const contacts = useLoaderData() as Contacts

  return (
    <section className="dark:text-white px-2 py-1 rounded-md bg-white dark:bg-slate-800">
      <p className="uppercase font-medium">contacts</p>
      <div className='w-full h-0.5 px-1 bg-slate-800 dark:bg-white'></div>
      {
        contacts.length > 0 ? <ul>
        {contacts.map((c) => <li><ContactCard key={`A${c.contactID}`} contact={c} /></li>)}
      </ul> : <p className="text-sm">you don't have any contacts</p>
      }
    </section>
  );
};

export default ContactList;
