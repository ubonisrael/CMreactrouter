import { NavLink } from 'react-router-dom'
import { BsPersonFillAdd } from "react-icons/bs";

const Index = () => {
  return (
      <NavLink to={`/add/`}>
      <div className="w-32 h-36 flex flex-col items-center justify-center text-3xl rounded-2xl bg-white cursor-pointer dark:bg-slate-800 dark:text-white hover:text-slate-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-slate-800">
        <BsPersonFillAdd />
        <p className="text-sm">add contact</p>
      </div>
      </NavLink>
  );
};

export default Index;
