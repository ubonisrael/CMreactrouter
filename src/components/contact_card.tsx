import * as Checkbox from "@radix-ui/react-checkbox";
import { Contact } from "../@types/app";
import { CheckIcon, PersonIcon } from "@radix-ui/react-icons";
import { SyntheticEvent, useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

const ContactCard = ({ contact }: { contact: Contact }) => {
  const [hovered, setHover] = useState(false);
  const fetcher = useFetcher()
  const selected = contact.selected == "false" ? false : true

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (selected) setHover(true);
  }, [selected]);

  useEffect(() => {
    const div = document.getElementById(`${contact.ID}`);

    div?.addEventListener("mouseenter", () => {
      setHover(true);
    });
    div?.addEventListener("mouseleave", () => {
      setHover(false)
    });
  }, []);

  return (
    <div
      id={`${contact.ID}`}
      aria-label="contact label"
      className={`relative w-full p-2 pl-8 grid sm:grid-cols-[60%_40%] lg:grid-cols-[40%_20%_40%] items-center cursor-pointer border-t border-black/25 dark:border-white/25 ${
        selected ? "bg-slate-200 dark:bg-slate-700" : "dark:bg-slate-800"
      } hover:bg-slate-200 dark:hover:bg-slate-700`}
    >
      <div
        onClick={handleClick}
        className={`absolute top-0 left-0 w-8 h-full flex items-center justify-center ${
          selected || hovered ? "block" : "hidden"
        }`}
      >
        <fetcher.Form method="post" action={`/contacts/${contact.ID}/select`}>
          <Checkbox.Root
          type="submit"
            name="selected"
            className={`w-5 h-5 ${
              selected ? "bg-blue-800" : "bg-white"
            } rounded flex items-center justify-center`}
            checked={selected}
          >
            <Checkbox.Indicator className="text-white">
              <CheckIcon style={{ fontSize: "18px", fontWeight: "bold" }} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </fetcher.Form>
      </div>
      <div
        className={`absolute top-0 left-0 w-8 h-full flex items-center justify-center ${
          selected || hovered ? "-z-10" : ""
        }`}
      >
        <PersonIcon />
      </div>
      <p className="uppercase">{`${contact.firstname} ${
        contact.surname || contact.midname || ""
      }`}</p>
      <p className="uppercase hidden sm:block">{`${contact.phone || "N/A"}`}</p>
      <p className="hidden lg:block">{`${contact.email || "N/A"}`}</p>
    </div>
  );
};

export default ContactCard;
