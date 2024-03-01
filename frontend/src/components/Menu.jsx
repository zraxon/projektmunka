import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";
function Menu() {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const token = sessionStorage.getItem("usertoken");

  return (
    //fejléc
    <div className="flex justify-center items-center border-b border-gray-300 flex-wrap py-5">
      <img src="../src/assets/logo.png" className="w-46 h-40 px-7"/>
      <div className="relative items-center">
        <div className="relative flex items-center hidden md:inline-flex">
          <input
            type="text"
            placeholder="Érdekel egy film? Keress rá itt."
            className="border border-gray-200 rounded-md py-3 px-2 my-5 w-96 text-left"
          />
          <svg
            className="absolute right-2 h-10 w-10 text-gray-400 hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="relative items-center gap-2">
          <Link to={"/"} className="border px-2 py-1 mr-3 rounded-md">Műsorlista</Link>
          <Link to={"/"} className="border px-2 py-1 mr-3 rounded-md">Jegyárak</Link>
          <Link to={"/belepes"} className="border px-2 py-1 mr-3 rounded-md text-gray-500">Belépés</Link>
          <Link to={"/regisztracio"} className="border px-2 py-1 mr-3 rounded-md bg-purple-600 text-white hover:bg-purple-700">Regisztráció</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
