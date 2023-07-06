import { Form, useLoaderData } from "react-router-dom";
import { Contact, Params } from "../@types/app";
import { getContact, updateContact } from "../lib/contacts";
import { formFields } from "../lib/formfields";
import { FaUserCircle } from "react-icons/fa";
import NavigateButtons from "../components/navigatebuttons";
import Favorite from "../components/favoritebtn";

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

export async function action({params, request}: {params: Params, request: Request}) {
  let formData = await request.formData()
  return updateContact(params.contactId, { favorite: `${formData.get('favorite') === 'true'}`})
}

const ContactPage = () => {
  const { contact } = useLoaderData() as { contact: Contact };
  console.log(contact);
  
 
  return (
    <section className="max-w-sm m-auto flex flex-col md:max-w-lg lg:max-w-2xl md:flex-row md:flex-wrap gap-2 lg:gap-4 items-start justify-center sm:justify-start">
      <NavigateButtons />
      <Favorite contact={contact} />
      <div className="w-full flex flex-col gap-1 items-center justify-center">
      {contact.avatarURL ? (
          <img
            src={`${contact.avatarURL}`}
            alt="contact avatar"
            className="w-20 h-20 md:w-36 md:h-36 lg:w-44 lg:h-48 dark:border-2 dark:border-solid dark:border-gray-400 rounded-full"
          />
        ) : (
          <span className="text-7xl md:text-9xl dark:text-white">
            <FaUserCircle />
          </span>
        )}
      </div>
      <div className="w-full md:grid md:grid-cols-2 md:gap-1">
        {formFields.map(({ label, name }, index) => (
          <div key={index} 
          className="w-full md:max-w-[300px] mx-auto flex flex-col items-start justify-between"
          >
            <p className="dark:text-white">{label}</p>
            <p className="dark:text-white w-full p-1 bg-white dark:bg-slate-800 rounded-md break-words shadow-md">{`${
              contact[name] || "N/A"
            }`}</p>
          </div>
        ))}
        </div>
        <div 
      className="w-full pt-2 flex items-center justify-evenly md:px-4 md:justify-end md:gap-4 dark:text-white">
          <Form action="edit">
            <button className="w-28 p-1 bg-white rounded-md dark:bg-slate-700 dark:text-white hover:text-gray-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-gray-900">
              Edit
            </button>
          </Form>
          <Form method="post" action="delete">
            <button className="w-28 p-1 bg-white rounded-md dark:bg-slate-700 dark:text-white hover:text-gray-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-gray-900">
              Delete
            </button>
          </Form>
        </div>
    </section>
  );
};

export default ContactPage;
