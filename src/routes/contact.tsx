import {
  Form,
  useLoaderData,
} from "react-router-dom";
import { Contact } from "../@types/app";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import NavigateButtons from "../components/navigate_buttons";
import Favorite from "../components/favorite_btn";
import { Button } from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";
import DeleteAlert from "../components/delete_alert";
import { MdDescription, MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const ContactPage = () => {
  const { contact } = useLoaderData() as { contact: Contact };

  return (
    <section className="w-full h-full bg-slate-50 dark:text-white dark:bg-slate-900">
      <NavigateButtons />
      <section className="w-full max-w-5xl mx-auto h-[calc(100%-72px)] flex flex-col md:flex-row md:flex-wrap p-2 gap-2 lg:gap-4 items-start justify-start">
        <div className="w-full grid gap-2 md:gap-4">
          <div className="absolute top-0 right-0 lg:static w-full p-2 flex items-center justify-start gap-2 sm:gap-3">
            <Favorite contact={contact} />
          </div>
          <div className="relative w-full flex flex-col lg:flex-row-reverse gap-2 md:gap-3 items-center justify-center lg:justify-between">
            <div className="absolute -bottom-44 sm:-bottom-52 md:-bottom-60 lg:static w-full lg:w-auto pt-2 flex items-center justify-evenly md:justify-end md:gap-4 dark:text-white">
              <Form action="edit">
                <Button>
                  <Pencil2Icon /> Edit
                </Button>
              </Form>
              <DeleteAlert />
            </div>
            <div className="grow flex flex-col items-start justify-between">
              <p className="w-full p-1 break-words text-center lg:text-left text-xl sm:text-2xl md:text-4xl font-bold">{`${
                contact.firstname || "N/A"
              } ${contact.surname || contact.midname || ""}`}</p>
            </div>
            {contact.avatarURL ? (
              <img
                src={`${contact.avatarURL}`}
                alt="contact avatar"
                className="w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 dark:border-2 dark:border-solid dark:border-gray-400 rounded-full"
              />
            ) : (
              <span
                aria-label="Default user avatar"
                className="text-7xl md:text-9xl dark:text-white"
              >
                <FaUserCircle />
              </span>
            )}
          </div>
          <div className="w-full h-0.5 my-1 hidden sm:block bg-black dark:bg-white"></div>
          <div className="dark:text-white w-full p-2 sm:p-3 md:p-4 bg-white dark:bg-slate-800 rounded-md break-words shadow-md">
            <div className="flex items-center gap-1 sm:text-xl md:text-2xl">
              <FaPhoneAlt />
              <p className="font-bold">{`${contact.phone || "N/A"}`}</p>
            </div>
            <div className="flex items-center gap-1 sm:text-xl md:text-2xl">
              <MdEmail />
              <p className="font-bold">{`${contact.email || "N/A"}`}</p>
            </div>
            <div className="flex items-center gap-1 sm:text-xl md:text-2xl">
              <AiFillHome />
              <p className="font-bold">{`${contact.address || "N/A"}`}</p>
            </div>
            <div className="flex items-center gap-1 sm:text-xl md:text-2xl">
              <MdDescription />
              <p className="font-bold">{`${contact.desc || "N/A"}`}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
