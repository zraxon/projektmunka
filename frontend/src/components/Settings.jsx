import { useContext, useEffect, useState } from 'react';
import UserContext from "../context/UserContext";
import AdatContext from '../context/AdatContext';

function Settings()  {
    const { tokenChange, nev, Email, Tel, AdoSz } = useContext(UserContext);
    const { Change } = useContext(AdatContext);

    let formObj = {
        Uj_Email: "",
        Uj_Telefonszam: "",
        Uj_Adoszam: "",
        Jelszo: "",
        Uj_Jelszo: "",
        Uj_Pkep: ""
      };
    const [formData, setFormData] = useState(formObj);

    useEffect(() => {
        tokenChange(sessionStorage.getItem("usertoken"));
    }, []);

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    };

    function szovegmodosit(event) {
        if(event.target.innerText[0] == "＞"){
            const szoveg = event.target.innerText.slice(1);
            const uj_szoveg = "⌵" + szoveg
            event.target.innerText = uj_szoveg
            modositMegjelenites(event.target.innerText[2])
        } else{
            const szoveg = event.target.innerText.slice(1);
            const uj_szoveg = "＞" + szoveg
            event.target.innerText = uj_szoveg
            modositMegjelenites(event.target.innerText[2])
        }
    }

    const onSubmit = (e, betu) => {
        e.preventDefault();
        if (betu == "E") {
            if (Email != formData.Uj_Email) {Change(sessionStorage.getItem("usertoken"), formData, "Email")}
            else {alert("Nem lehet a jelenlegi E-mailre változtatni az E-mailt!")}
        }
        else if (betu == "T") {
            if (Tel != formData.Uj_Telefonszam) {Change(sessionStorage.getItem("usertoken"), formData, "Tel")}
            else {alert("Nem lehet a jelenlegi Telefonszámra változtatni a Telefonszámot!")}
        }
        else if (betu == "A") {
            if (AdoSz != formData.Uj_Adoszam) {Change(sessionStorage.getItem("usertoken"), formData, "Ado")}
            else {alert("Nem lehet a jelenlegi Adószámra változtatni az Adószámot!")}
        }
        else if (betu == "J"){
            Change(sessionStorage.getItem("usertoken"), formData, "Jelszo")
        }
        else {
            Change(sessionStorage.getItem("usertoken"), formData, "Pkep")
        }
    };

    function modositMegjelenites(betu) {
        if(betu == "E"){
            if(document.getElementById("EmailMod").hidden) document.getElementById("EmailMod").hidden = false 
            else document.getElementById("EmailMod").hidden = true
        }
        else if (betu == "T") {
            if(document.getElementById("TelMod").hidden) document.getElementById("TelMod").hidden = false 
            else document.getElementById("TelMod").hidden = true
        }
        else if (betu == "A") {
            if(document.getElementById("AdoMod").hidden) document.getElementById("AdoMod").hidden = false 
            else document.getElementById("AdoMod").hidden = true
        }
        else if (betu == "J") {
            if(document.getElementById("JelMod").hidden) document.getElementById("JelMod").hidden = false 
            else document.getElementById("JelMod").hidden = true
        }
        else {
            if(document.getElementById("PkepMod").hidden) document.getElementById("PkepMod").hidden = false 
            else document.getElementById("PkepMod").hidden = true
        }
    }

    return (
        <div className='absolute rounded-3xl text-gray-200 bg-gray-600 w-6/12 left-[25%] top-[25%] p-10'>
            <h1 className='text-center text-6xl mb-12'>Információ</h1>
            <div className='bg-gray-500 rounded-2xl p-5'>
                <h1>Név: {nev}</h1>
                <h1>E-mail cím: {Email}</h1>
                <h1>Telefonszám: {Tel}</h1>
                <h1>Adószám: {AdoSz}</h1>
            </div>

            <hr className='mt-10 mb-10'/>

            <h1 className='text-center text-6xl mb-12'>Adatmódosítás</h1>
            <div className='bg-gray-500 rounded-2xl p-5'>
                <h1 className='text-xl' onClick={szovegmodosit}>＞ E-mail cím módosítás</h1>
                <div id="EmailMod" hidden className='bg-gray-400 rounded-2xl p-3 mb-5 mt-3'>
                    <form onSubmit={(e) => onSubmit(e, "E")}>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="Uj_Email">Új E-mail cím</label>
                        <input onChange={writeData} value={formData.Uj_Email} className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="Uj_Email" type="email" placeholder="Új E-mail"/>
                        <button className="mt-5 mb-2 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Módosítás</button>
                    </form>
                </div>

                <h1 className='text-xl' onClick={szovegmodosit}>＞ Telefonszám módosítás</h1>
                <div id="TelMod" hidden className='bg-gray-400 rounded-2xl p-3 mb-5 mt-3'>
                    <form onSubmit={(e) => onSubmit(e, "T")}>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="Uj_Telefonszam">Új Telefonszám</label>
                        <input onChange={writeData} value={formData.Uj_Telefonszam} className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="Uj_Telefonszam" type="text" placeholder="Új Telefonszám"/>
                        <button className="mt-5 mb-2 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Módosítás</button>
                    </form>
                </div>

                <h1 className='text-xl' onClick={szovegmodosit}>＞ Adószám módosítás</h1>
                <div id="AdoMod" hidden className='bg-gray-400 rounded-2xl p-3 mb-5 mt-3'>
                    <form onSubmit={(e) => onSubmit(e, "A")}>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="Uj_Adoszam">Új Adószám</label>
                        <input onChange={writeData} value={formData.Uj_Adoszam} className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="Uj_Adoszam" type="text" placeholder="Új Adószám"/>
                        <button className="mt-5 mb-2 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Módosítás</button>
                    </form>
                </div>

                <h1 className='text-xl' onClick={szovegmodosit}>＞ Jelszó módosítás</h1>
                <div id="JelMod" hidden className='bg-gray-400 rounded-2xl p-3 mb-5 mt-3'>
                    <form onSubmit={(e) => onSubmit(e, "J")}>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="Uj_Jelszo">Új Jelszó</label>
                        <input onChange={writeData} value={formData.Uj_Jelszo} className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="Uj_Jelszo" type="text" placeholder="Új Jelszó"/>
                        <button className="mt-5 mb-2 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Módosítás</button>
                    </form>
                </div>

                <h1 className='text-xl' onClick={szovegmodosit}>＞ Profilkép módosítás</h1>
                <div id="PkepMod" hidden className='bg-gray-400 rounded-2xl p-3 mb-5 mt-3'>
                    <form onSubmit={(e) => onSubmit(e, "P")}>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="Uj_Pkep">Új Profilkép</label>
                        <input onChange={writeData} value={formData.Uj_Pkep} className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="Uj_Pkep" type="text" placeholder="Új Profilkép"/>
                        <button className="mt-5 mb-2 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Módosítás</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Settings;
