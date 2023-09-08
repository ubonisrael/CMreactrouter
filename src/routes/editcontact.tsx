import { useLoaderData } from "react-router-dom";
import { Contact } from "../@types/app";
import ContactForm from "../components/contact_form";


const EditContact = () => {
  const { contact } = useLoaderData() as { contact: Contact };

  return <ContactForm contact={contact} />;
};

export default EditContact;
