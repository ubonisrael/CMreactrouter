import { AiOutlineUserAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const AddContactBtn = ({onClick}: {onClick: () => void}) => {
  return (
    <NavLink to={`/add/`}>
      <div onClick={onClick}>
        <button className="w-full flex items-center justify-center gap-2 text-lg border border-slate-800 rounded shadow py-2 hover:bg-slate-900 hover:text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700">
          <AiOutlineUserAdd />
          <span>Create Contact</span>
        </button>
      </div>
    </NavLink>
  );
};

export default AddContactBtn;