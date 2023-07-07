import { Contact } from "../@types/app";

const ContactCard = ({ contact }: { contact: Contact }) => (
  <div aria-label="contact label" className="w-full h-6 sm:h-10 md:h-12 p-2 my-2 flex gap-1 items-center justify-start cursor-pointer rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600">
    <p className="uppercase">{`${contact.firstname} ${
      contact.surname || contact.midname || ""
    }`}</p>
  </div>
);

export default ContactCard;