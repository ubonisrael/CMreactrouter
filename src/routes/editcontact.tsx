import { ActionFunction, LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { getContact, updateContact } from "../lib/contacts";
import { Contact } from "../@types/app";
import ContactForm from "../components/contactform";

export const action: ActionFunction = async({
  request,
  params,
}) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  if (!params.contactId) return
  updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`)
}

export const loader: LoaderFunction = async({ params }) => {
  if (!params.contactId) return
    const contact = await getContact(params.contactId);
    if (!contact) {
      throw new Response("", {
        status: 404,
        statusText: "Contact Not Found",
      });
    }
    return { contact };
  }

const EditContact = () => {
  const { contact } = useLoaderData() as { contact: Contact };

  return <ContactForm contact={contact} />;
};

export default EditContact;
