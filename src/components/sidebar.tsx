import { Separator } from "@radix-ui/themes";
import AddContactBtn from "../components/addbtn";
import { useOutsideClick } from "../lib/useOutsideClick";
import { MdAutoFixHigh, MdFavorite, MdPerson } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SideBar = ({
  toggled,
  closeMenu,
}: {
  toggled: boolean;
  closeMenu: () => void;
}) => {
  const ref = useOutsideClick(closeMenu);
  return (
    <>
      <div
        className={`fixed z-30 top-0 left-0 ${
          toggled ? "w-screen" : "w-0"
        } h-screen bg-black/25 sm:hidden`}
      ></div>
      <nav
        ref={ref}
        className={`fixed z-30 top-0 left-0 flex flex-col gap-2 ${
          toggled ? "w-64 p-2 translate-x-0" : "-translate-x-full"
        } sm:w-64 md:w-72 sm:translate-x-0 sm:p-3 md:p-4 transition-all ease-linear duration-300 sm:transition-none sm:static h-screen sm:h-[calc(100vh-80px)] md:h-[calc(100vh-88px)]  dark:text-white bg-white dark:bg-slate-900 shadow-lg sm:shadow-none overflow-hidden`}
      >
        <AddContactBtn onClick={closeMenu} />
        <Separator my="1" size="4" />
        <ul>
          <li
            onClick={closeMenu}
            className="w-full text-xl hover:bg-black/10 cursor-pointer p-1 rounded dark:hover:bg-slate-600"
          >
            <NavLink className="w-full flex items-center gap-2" to={"/"}>
              <MdPerson />
              <p>Contacts</p>
            </NavLink>
          </li>
          <li
            onClick={closeMenu}
            className="w-full flex items-center text-xl gap-2 hover:bg-black/10 cursor-pointer p-1 rounded dark:hover:bg-slate-600"
          >
            <MdFavorite />
            <p>Favorites</p>
          </li>
          <li
            onClick={closeMenu}
            className="w-full flex items-center text-xl gap-2 hover:bg-black/10 cursor-pointer p-1 rounded dark:hover:bg-slate-600"
          >
            <MdAutoFixHigh />
            <p>Merge and Fix</p>
          </li>
          <li
            onClick={closeMenu}
            className="w-full flex items-center text-xl gap-2 hover:bg-black/10 cursor-pointer p-1 rounded dark:hover:bg-slate-600"
          >
            <AiOutlineDownload />
            <p>Import</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
