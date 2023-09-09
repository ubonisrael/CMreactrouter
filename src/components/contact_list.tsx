import { NavLink } from "react-router-dom";
import { Contacts } from "../@types/app";
import ContactCard from "./contact_card";
import DeleteAlert from "./delete_alert";
import EmptyList from "./empty_list";

const ContactList = ({contacts, type}: {contacts: Contacts, type: string}) => {

  const selectedContacts = contacts
    .filter((contact) => contact.selected == "true")
    .map((contact) => contact.ID);
  const selectedLength = selectedContacts.length;

  return (
    <section
      aria-label="contacts list"
      className="relative w-full h-full overflow-y-scroll scrolllbar p-2 sm:p-3 md:p-4 dark:text-white bg-white dark:bg-slate-900"
    >
      <h2 className="mb-2 sm:mb-3 md:mb-4 text-2xl uppercase font-bold">{type}s</h2>
      {contacts.length > 0 ? (
        <div className="w-full border border-black dark:border-white/50">
          {selectedLength > 0 ? (
            <div className="w-full flex items-center justify-between p-2 sm:p-3  dark:text-white bg-white dark:bg-slate-900 border-b border-black dark:border-white/25">
              <p className=" text-blue-800 dark:text-blue-300 font-bold text-lg sm:text-xl">
                {selectedLength} selected
              </p>
                <DeleteAlert action={`/contacts/${selectedContacts.join('+')}/multidelete`} />
            </div>
          ) : (
            <div className="w-full grid sm:grid-cols-[60%_40%] lg:grid-cols-[40%_20%_40%] p-2 pl-4 sm:p-4 sm:pl-8 uppercase font-bold dark:text-white bg-white dark:bg-slate-900 border-b border-black dark:border-white/25">
              <p>name</p>
              <p className="hidden sm:block">telephone</p>
              <p className="hidden lg:block">email</p>
            </div>
          )}
          <div>
            <p className="w-full p-2 uppercase font-bold italics opacity-50">{`contacts (${contacts.length})`}</p>
          </div>
          {contacts.map((c) => (
            <NavLink key={`${c.ID}`} to={`/contacts/${c.ID}`}>
              <ContactCard contact={c} />
            </NavLink>
          ))}
        </div>
      ) : (
        <EmptyList type={type} />
      )}
    </section>
  );
};

export default ContactList;
