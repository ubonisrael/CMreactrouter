import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { formFields } from "../lib/formfields";
import { storage } from "../firebase";
import { FaUserCircle } from "react-icons/fa";
import { randomId } from "../lib/randomId";
import { createContact } from "../lib/contacts";

// type MyParams = {
//     contactId: string;
//   }

export async function action({request}: {request: Request}) {
    const formData = await request.formData()
    const contact = Object.fromEntries(formData)
    contact.ID = `${contact.firstname}${randomId()}`
    await createContact(contact)
    console.log('added contact', contact);
    return null
}

const AddContact = () => {
    const [avatar, setAvatar] = useState('')

  const navigate = useNavigate();

  const updateAvatar = async(e: React.ChangeEvent<HTMLInputElement>) => {

    if (!e.target.files) return

    const avatarFile = e.target.files[0];

    const storageRef = ref(storage, `contactmanager/${randomId()}`);

    const uploadTask = uploadBytesResumable(storageRef, avatarFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
      className="max-w-sm md:max-w-md m-auto flex flex-col gap-2 items-start justify-center"
    >
      <h2 className="w-full text-center dark:text-white">New Contact</h2>
      <div className="w-full flex flex-col gap-1 items-center justify-center">
        {avatar ? (
                <img
                  src={avatar}
                  alt="contact avatar"
                  className="w-24 h-24 rounded-full"
                />
              ) : (
                <span className="text-5xl  dark:text-white">
                  <FaUserCircle />
                </span>
              )}
        <label
          htmlFor="avatar"
          className="p-2 dark:text-white dark:hover:text-slate-900 cursor-pointer border border-solid hover:border-slate-900 dark:hover:bg-slate-100 rounded-lg"
        >
          Upload Contact Image
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
          value={avatar}
          onChange={() => console.log('')}
        />
      </div>
      {formFields.map((field, i) => {
        return (
          <div key={field.name + i} className="w-full flex gap-1 md:gap-8 items-center justify-between">
            <label htmlFor={field.name} className="font-medium dark:text-white">
              {field.label}:
            </label>
            {field.name === "desc" ? (
              <textarea id="desc" className="max-w-[270px] min-w-[190px] md:grow p-1 rounded-md dark:text-white dark:bg-slate-800 border-0 border-none shadow-sm md:shadow-md"></textarea>
            ) : field.name === "gender" ? (
              <select name="gender" id="gender" className="p-1 rounded-md dark:text-white dark:bg-slate-800 border-0 border-none shadow-sm md:shadow-md">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                className="max-w-[270px] min-w-[190px] md:grow p-1 rounded-md dark:text-white dark:bg-slate-800 border-0 border-none shadow-sm md:shadow-md"
                type={field.name === "phone" ? "number" : "text"}
              />
            )}
          </div>
        );
      })}
      <div className="w-full pt-2 flex items-center justify-evenly dark:text-white">
        <button className="w-28 p-1 bg-white rounded-md border border-solid border-gray-900 dark:border-slate-300 dark:bg-slate-700 hover:text-gray-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-gray-900" type="submit">Save Contact</button>
        <button className="w-28 p-1 bg-white rounded-md border border-solid border-gray-900 dark:border-slate-300 dark:bg-slate-700 hover:text-gray-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-gray-900" type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </Form>
  );
};

export default AddContact;