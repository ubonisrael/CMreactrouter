import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBackward } from "react-icons/fa";

const NavigateButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="p-2 flex items-center justify-start gap-2 sm:gap-3 md:gap-4 md:w-full">
      <button
        type="button"
        className="w-8 text-xl flex items-center justify-center p-2 bg-white rounded-md dark:bg-slate-700 dark:text-white hover:text-gray-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-gray-900"
        onClick={() => navigate(-1)}
      >
        <FaBackward />
      </button>
      <button
        type="button"
        className="w-8 text-xl flex items-center justify-center p-2 bg-white rounded-md dark:bg-slate-700 dark:text-white hover:text-gray-100 hover:bg-slate-700 dark:hover:bg-slate-100 dark:hover:text-gray-900"
        onClick={() => navigate("/")}
      >
        <AiFillHome />
      </button>
    </div>
  );
};

export default NavigateButtons;
