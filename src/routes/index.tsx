import { NavLink } from "react-router-dom";
import ContactList from "../components/contact_list";
import { FaPlus } from "react-icons/fa";

const Index = () => (
  <>
    <ContactList />
    <NavLink to={"/add/"} className="sm:hidden">
      <div className="fixed bottom-4 right-4 w-12 h-12 p-2 flex items-center justify-center text-2xl text-white bg-blue-500 rounded-full">
        <FaPlus />
      </div>
    </NavLink>
  </>
);

export default Index;
