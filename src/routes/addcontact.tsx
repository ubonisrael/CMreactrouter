import { ActionFunction, redirect } from "react-router-dom";
import { randomId } from "../lib/randomId";
import { createContact } from "../lib/contacts";
import ContactForm from "../components/contactform";

export const action: ActionFunction = async({ request }) => {
  const formData = await request.formData();
  const contact = Object.fromEntries(formData);
  contact.ID = `${contact.firstname}${randomId()}`;
  await createContact(contact);
  return redirect("/");
}

const AddContact = () => <ContactForm />

export default AddContact;
