import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function Root() {
  const [toggleMenu, setToggle] = useState(true);

  const handleToggleMenu = () => setToggle((prev) => !prev);

  return (
      <>
      <Header handleToggle={handleToggleMenu} toggled={toggleMenu} />
      <main className="w-full h-[calc(100vh-56px)] md:h-[calc(100vh-64px)] sm:flex sm:items-center sm:justify-center sm:gap-2 md:gap-4 lg:gap-8 p-4 sm:p-2 md:p-6">
        <SideBar toggled={toggleMenu} handleToggle={handleToggleMenu} />
        <section className="h-full overflow-y-scroll scrollbar p-2 transition-all ease-linear duration-300 rounded-md sm:p-4 sm:grow sm:rounded-xl max-w-2xl bg-slate-200 dark:bg-slate-900">
          <Outlet />
        </section>
      </main>
      </>
  );
}
