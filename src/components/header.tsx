import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { handleToggle, themeInterface } from "../@types/app";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiContactsBook2Fill } from "react-icons/ri";
import SearchBar from "./searchbar";

const Header = ({ handleOpenMenu, handleCloseMenu, toggled }: handleToggle) => {
  const { theme, handleTheme } = useContext(ThemeContext) as themeInterface;

  return (
    <header className="relative dark:text-white w-full min-h-[56px] p-2 sm:p-4 flex items-center bg-white sm:border-b sm:border-black/25 dark:bg-slate-900 dark:border-white/50">
      <div className="w-full max-w-[160px] sm:max-w-[288px] flex items-center gap-2">
        <button
          aria-label={`${toggled ? "open" : "close"} menu`}
          role="toggle menu"
          onClick={toggled ? handleCloseMenu: handleOpenMenu}
          className="sm:hidden"
        >
          <span aria-hidden>
            <GiHamburgerMenu />
          </span>
        </button>
        <div aria-hidden className="hidden sm:block sm:text-2xl md:text-3xl">
          <RiContactsBook2Fill />
        </div>
        <h1
          className="uppercase dark:text-white font-bold sm:text-2xl md:text-3xl"
          aria-label="Contact Manager"
        >
          contacts
        </h1>
      </div>
      <div className="w-full max-w-[240px] p-2 sm:p-0 dark:text-white bg-white dark:bg-slate-900 sm:max-w-none absolute top-0 right-0 sm:static flex-1 flex items-center justify-between gap-4 sm:gap-8">
        <SearchBar />
        <button
          className="sm:text-2xl"
          onClick={handleTheme}
          aria-label={`set ${theme === "dark" ? "light" : "dark"} theme`}
          role="switch theme"
        >
          <span aria-hidden>
            {theme === "dark" ? <MdDarkMode /> : <MdSunny />}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
