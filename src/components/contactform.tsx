import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { FaUserCircle } from "react-icons/fa";
import { randomId } from "../lib/randomId";
import { formFields } from "../lib/formfields";
import { editForm } from "../@types/app";
import NavigateButtons from "./navigatebuttons";

const ContactForm = ({ contact }: editForm) => {
  const [avatar, setAvatar] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setProgress(0)
  }, [avatar])

  const updateAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const avatarFile = e.target.files[0];

    const storageRef = ref(storage, `contactmanager/${randomId()}`);

    const uploadTask = uploadBytesResumable(storageRef, avatarFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage)
      },
      (error) => {
        alert(error);
        console.log(error);
      },
      () =>
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setAvatar(downloadURL);
        })
    );
  };

  return (
    <Form
      method="post"
       className="max-w-sm m-auto flex flex-col md:max-w-lg lg:max-w-2xl md:flex-row md:flex-wrap gap-2 lg:gap-4 items-start justify-center sm:justify-start"  
    >
      <NavigateButtons />
      <h2 className="w-full text-center dark:text-white uppercase py-1">{contact ? "Edit" : "New"} Contact</h2>
      <div className="w-full flex flex-col gap-1 items-center justify-center">
        {avatar || (contact && contact.avatarURL) ? (
          <img
            src={avatar || `${contact ? contact.avatarURL : ""}`}
            alt="contact avatar"
            className="w-20 h-20 md:w-36 md:h-36 lg:w-44 lg:h-48 dark:border-2 dark:border-solid dark:border-gray-400 rounded-xl md:rounded-3xl"
          />
        ) : (
          <span className="text-7xl md:text-9xl  dark:text-white">
            <FaUserCircle />
          </span>
        )}
        <span className={`${progress == 0 ? 'hidden' : 'inline-block'} dark:text-white`}>{`${progress.toFixed(0)}%`}</span>
        <span className={`${progress == 0 ? 'hidden' : 'inline-block'} h-1 bg-blue-800`} style={{width: `${1.44 * progress}px`}}></span>
        <label
          htmlFor="avatar"
          className="p-2 text-xs bg-slate-900 hover:bg-slate-100 dark:bg-slate-100 dark:hover:bg-slate-700 text-white hover:text-slate-900 dark:text-slate-900 dark:hover:text-white cursor-pointer rounded-lg"
        >
          {contact ? "Update" : "Upload"} Contact Image
        </label>
        <input
          type="file"
          id="avatar"
          className="w-0 h-0"
          name="avatar"
          accept="image/*"
          onChange={updateAvatar}
        />
        <input
          type="text"
          id="avatarURL"
          className="w-0 h-0"
          name="avatarURL"
          value={avatar ? avatar : contact ? `${contact.avatarURL}` : ""}
          onChange={() => console.log("")}
        />
      </div>
      <div className="w-full md:grid md:grid-cols-2 md:gap-1">
      {formFields.map((field, i) => {
        return (
          <div
            key={field.name + i}
            className="w-full md:max-w-[300px] mx-auto flex flex-col items-start justify-center"
          >
            <label htmlFor={field.name} className="font-medium dark:text-white">
              {field.label}:
            </label>
            {field.name === "desc" || field.name === "address" ? (
              <textarea
                id={field.name}
                name={field.name}
                className="w-full p-1 rounded-md dark:text-white dark:bg-slate-800 border-0 border-none shadow-sm md:shadow-md"
                defaultValue={contact ? `${contact[field.name]}` : ""}
              ></textarea>
            ) : field.name === "gender" ? (
              <select
                name="gender"
                id="gender"
                className="w-full p-1 rounded-md dark:text-white dark:bg-slate-800 border-0 border-none shadow-sm md:shadow-md"
                defaultValue={contact ? `${contact[field.name]}` : ""}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                className="w-full p-1 rounded-md dark:text-white dark:bg-slate-800 border-0 border-none shadow-sm md:shadow-md"
                type={field.name === "phone" ? "number" : "text"}
                defaultValue={contact ? `${contact[field.name]}` : ""}
              />
            )}
          </div>
        );
      })}
      </div>
      <div 
      className="w-full pt-2 flex items-center justify-evenly md:px-4 md:justify-end md:gap-4 dark:text-white">
        <button
          className="w-28 p-1 bg-white rounded-md dark:bg-slate-700 dark:text-white hover:text-gray-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-gray-900"
          type="submit"
        >
          {contact ? "Update" : "Add"} Contact
        </button>
        <button
          className="w-28 p-1 bg-white rounded-md dark:bg-slate-700 dark:text-white hover:text-gray-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-gray-900"
          type="button"
          onClick={(event) => {
            if (
              confirm(
                "Are you sure you want to cancel? Changes will not be saved!"
              )
            ) {
              event.preventDefault();
              navigate(-1);
            }
          }}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
};

export default ContactForm;
