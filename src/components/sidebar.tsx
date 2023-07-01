import React from "react";
import ContactList from "./contactlist";
import { MdClose } from "react-icons/md";
import SearchBar from "./searchbar";

interface toggled {
  toggled: boolean;
  handleToggle: () => void
}

const SideBar = ({toggled, handleToggle}: toggled) => {

  return (
    <nav className={`fixed inset-0 flex flex-col gap-2 h-screen p-2 ${toggled ? '-translate-x-full' : ''} transition-all ease-linear duration-300 sm:static sm:w-64 sm:h-auto sm:min-h-screen sm:translate-x-0 sm:p-4 sm:rounded-xl md:w-72 bg-slate-200 dark:bg-slate-900`}>
      <button onClick={handleToggle} className="self-end text-lg sm:hidden dark:text-white"><MdClose /></button>
      <SearchBar />
      <ContactList />
    </nav>
  );
};

export default SideBar;
