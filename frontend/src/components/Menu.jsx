import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import bg from '../assets/log-reg-bg.jpg';

function Menu() {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  //navbar fix
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 160) {
      setFix(true)
    }
    else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed);

  //login
  const { logout } = useContext(UserContext);
  const token = sessionStorage.getItem("usertoken");

  const kuldes = (formData, method) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
      method: method,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(token => {
        if (!token.message) {
          sessionStorage.setItem('usertoken', token)
          toast.success("Sikeres belépés!")
          location.reload();
        }
        else if (token.message == "0") alert("Hibás E-mail cím vagy jelszó!")
      })
      .catch(err => console.log(err));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (login) {kuldes(formData, 'POST');}
    else if (register) {regkuldes(formData);}
    //action    
  }

  let formObj = {};

  formObj = {
    Vnev:"",
    Knev:"",
    E_mail:"",
    E_mail2:"",
    Telefonszam:"",
    Adoszam:"",
    Jelszo:"",
    Jelszo2:""
  }

  const [formData, setFormData] = useState(formObj);

  const writeData = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  }
  //login/register panel megjelenítése
  function kibe() {
    if(!register){
      if (document.getElementById('kibe').hidden == true) {
        setLogin(true);
        document.getElementById('kibe').hidden = false;
        document.getElementById('blur').style.filter = "blur(12px)";
        document.getElementById('blur').hidden = false;
      }
      else {
        setLogin(false);
        document.getElementById('kibe').hidden = true
        document.getElementById('blur').hidden = true
      }
    }
  }

  function Rkibe() {
    if(!login){
      if (document.getElementById('Rkibe').hidden == true) {
        setRegister(true);
        document.getElementById('Rblur').style.filter = "blur(12px)";
        document.getElementById('Rkibe').hidden = false;
        document.getElementById('Rblur').hidden = false;
      }
      else {
        setRegister(false);
        document.getElementById('Rkibe').hidden = true;
        document.getElementById('Rblur').hidden = true
      }
    }
  }

  //regisztráció
  const regkuldes= async (formDat) =>{
      await fetch(`${import.meta.env.VITE_BASE_URL}/register`,{
          method: "POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify(formDat)
      })
      .then(res=>res.json())
      .then(token=>{
          if(token.message != "0"){
              sessionStorage.setItem('usertoken',token);
              alert("Sikeres regisztráció!");
              Rkibe()
          } else {
              alert(token.message);
          };
      })
      .catch(err=>console.log(err));
  }

  return (
    <div>
      <div className={fix ? "fixed w-screen flex justify-center items-center border-b bg-[#2c2b2d] flex-wrap py-5" : "w-screen flex justify-center items-center border-b bg-[#2c2b2d] flex-wrap py-5"} style={{ zIndex: "99999" }}>
        <Link to={"/"}> <img src="../src/assets/logo.png" className="w-46 h-40 px-7" /> </Link>
        <div className="relative items-center">
          <div className="relative flex items-center md:inline-flex">
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
          <div className="relative items-center gap-2 text-white">
            <Link to={"/"} className="border px-2 py-1 mr-3 rounded-md">Műsorlista</Link>
            <Link to={"/"} className="border px-2 py-1 mr-3 rounded-md">Jegyárak</Link>
            {token ?
              <button onClick={logout} className="border px-2 py-1 mr-3 rounded-md ">Kijelentkezés</button>
              :
              <div>
                <button onClick={kibe} className="border px-2 py-1 mr-3 rounded-md ">Belépés</button>
                <button onClick={Rkibe} className="border px-2 py-1 mr-3 rounded-md bg-purple-600 hover:bg-purple-700">Regisztráció</button>
              </div>
            }
          </div>
        </div>
      </div>

      <div id="blur" hidden onClick={kibe} className=" fixed bg-gray-500 opacity-85 h-screen w-screen" style={{ zIndex: "8000" }}></div>

      <div id='kibe' hidden className={fix ? "my-60 fixed w-96 rounded-lg overflow-hidden shadow-lg m-auto left-0 right-0" : "my-10 fixed w-96 rounded-lg overflow-hidden shadow-lg m-auto left-0 right-0"} style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", zIndex: " 9000" }}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">CinemaCloud</h2>
          <p className="text-gray-700 mb-6">Kérjük lépjen be.</p>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="E_mail">
                E-mail cím
              </label>
              <input onChange={writeData} value={formData.E_mail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="E_mail" type="text" placeholder="E-mail cím" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Jelszo">
                Jelszó
              </label>
              <input onChange={writeData} value={formData.Jelszo} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Jelszo" type="password" placeholder="Jelszó" />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Belépés
              </button>
            </div>
          </form>
        </div>
      </div>
        
        <div id="Rblur" hidden onClick={Rkibe} className=" fixed bg-gray-500 opacity-85 h-screen w-screen" style={{ zIndex: "8000" }}></div>
        <div id="Rkibe" hidden className={fix ? "fixed my-20 left-0 right-0 max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto" : "fixed -my-40 left-0 right-0 max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto"} style={{zIndex: "99999"}}>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">CinemaCloud</h2>
            <p className="text-gray-700 mb-6">Kérjük regisztáljon.</p>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Vnev">
                  Vezetéknév
                </label>
                <input onChange={writeData} value={formData.Vnev} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Vnev" type="text" placeholder="Vezetéknév" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Knev">
                  Keresztnév
                </label>
                <input onChange={writeData} value={formData.Knev} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Knev" type="text" placeholder="Keresztnév" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="E_mail2">
                  E-mail cím
                </label>
                <input onChange={writeData} value={formData.E_mail2} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="E_mail2" type="text" placeholder="E-mail cím" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Telefonszam">
                Telefonszám
                </label>
                <input onChange={writeData} value={formData.Telefonszam} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Telefonszam" type="text" placeholder="Telefonszám" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Adoszam">
                Adószám
                </label>
                <input onChange={writeData} value={formData.Adoszam} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Adoszam" type="text" placeholder="Adoszám" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Jelszo2">
                  Jelszó
                </label>
                <input onChange={writeData} value={formData.Jelszo2} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Jelszo2" type="password" placeholder="Jelszó" />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Küldés
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Menu;