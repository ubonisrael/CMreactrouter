import { redirect, useLoaderData } from "react-router-dom";
import { getContact, updateContact } from "../lib/contacts";
import { Contact, Params } from "../@types/app";
import ContactForm from "../components/contactform";

export async function action({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`)
}

export async function loader({ params }: { params: Params }) {
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
