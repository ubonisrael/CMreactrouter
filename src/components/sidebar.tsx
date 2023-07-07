import ContactList from "./contactlist";
import { MdClose } from "react-icons/md";
import SearchBar from "./searchbar";

interface toggled {
  toggled: boolean;
  handleToggle: () => void;
}

const SideBar = ({ toggled, handleToggle }: toggled) => {
  return (
    <nav
      className={`fixed inset-0 flex flex-col gap-2 p-2 ${
        toggled ? "-translate-x-full" : ""
      } transition-all ease-linear duration-300 sm:static sm:w-64 sm:h-full sm:translate-x-0 sm:p-4 sm:rounded-xl md:w-72 bg-slate-200 dark:bg-slate-900`}
    >
      <button
        aria-label={`${toggled ? "open" : "close"} menu`}
        role="toggle menu"
        onClick={handleToggle}
        className="self-end text-lg sm:hidden dark:text-white"
      >
        <span aria-hidden>
          <MdClose />
        </span>
      </button>
      <SearchBar />
      <ContactList handleToggle={handleToggle} />
    </nav>
  );
};

export default SideBar;
