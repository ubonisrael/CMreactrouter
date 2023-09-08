import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function Root() {
  const [toggleMenu, setToggle] = useState(false);

  const handleOpenMenu = () => setToggle(true);
  const handleCloseMenu = () => setToggle(false);

  return (
      <>
      <Header handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} toggled={toggleMenu} />
      <main className="relative w-full h-[calc(100vh-56px)] md:h-[calc(100vh-90px)] dark:bg-black sm:flex">
        <SideBar closeMenu={handleCloseMenu} toggled={toggleMenu} />
        <div className="hidden w-[1px] h-full bg-black/25  dark:bg-white/50 sm:block"></div>
        <section className="w-full sm:w-[calc(100vw-256px)] md:w-[calc(100vw-288px)] h-full transition-all ease-linear duration-300">
          <Outlet />
        </section>
      </main>
      </>
  );
}
