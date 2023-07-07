import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { handleToggle, themeInterface } from "../@types/app";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ handleToggle, toggled }: handleToggle) => {
  const { theme, handleTheme } = useContext(ThemeContext) as themeInterface;

  return (
    <header className="dark:text-white w-screen p-4 flex items-center justify-between bg-white dark:bg-slate-900 shadow-sm md:shadow-md">
      <button
        aria-label={`${toggled ? "open" : "close"} menu`}
        role="toggle menu"
        onClick={handleToggle}
        className="sm:hidden"
      >
        <span aria-hidden>
          <GiHamburgerMenu />
        </span>
      </button>
      <h1
        className="uppercase dark:text-white font-bold md:text-2xl lg:text-4xl"
        aria-label="Contact Manager"
      >
        contact manager
      </h1>
      <button
        className="md:text-2xl lg:text-4xl"
        onClick={handleTheme}
        aria-label={`set ${theme === "dark" ? "light" : "dark"} theme`}
        role="switch theme"
      >
        <span aria-hidden>
          {theme === "dark" ? <MdDarkMode /> : <MdSunny />}
        </span>
      </button>
    </header>
  );
};

export default Header;
