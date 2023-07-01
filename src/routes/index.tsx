import React from "react";
import { NavLink } from 'react-router-dom'
import { BsPersonFillAdd } from "react-icons/bs";

const Index = () => {
  return (
    <div>
      <NavLink to={`/add/`}>
      <div className="w-24 h-20 flex flex-col items-center justify-center text-3xl rounded-3xl bg-white cursor-pointer dark:bg-slate-800 dark:text-white hover:text-slate-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-slate-800">
        <BsPersonFillAdd />
        <p className="text-sm">add contact</p>
      </div>
      </NavLink>
    </div>
  );
};

export default Index;
