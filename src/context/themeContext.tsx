import React, { createContext, useState, useEffect } from "react";
import { Props, themeInterface } from "../@types/app";

export const ThemeContext = createContext<themeInterface | null>(null);

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light';

if (currentTheme === "dark" || (prefersDarkScheme && !currentTheme)) {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>(currentTheme);

  const handleTheme = () => {
    document.body.classList.toggle("dark");
      setTheme(
        document.body.classList.contains("dark") ? "dark" : "light"
      );
  };

  useEffect(() => {
    localStorage.setItem("theme", `${theme}`);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
