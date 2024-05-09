import { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [refresh, setRefresh] = useState(false);
    const [pKep, setpKep] = useState("");
    const [nev, setNev] = useState("");
    const [Email, setEmail] = useState("");
    const [Tel, setTel] = useState("");
    const [AdoSz, setAdo] = useState("");

    const update = () => {
        setRefresh(prev => !prev);
    }

    const logout = () => {
        sessionStorage.removeItem('usertoken');
        location.reload();
    }
    
    useEffect(()=> {
        if(sessionStorage.getItem("usertoken") != null){
            fetch(`${import.meta.env.VITE_BASE_URL}/validation`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem("usertoken")}`
                }
            })
            .then(res => res.json())
            .then(message => {if(message.message == "Érvénytelen token!") logout})
            .catch(err => console.log(err));
        }
    }, [])

    const login = (formData, method) => {
        fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
            method: method,
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(token => {
                if (!token.message) {
                    sessionStorage.setItem('usertoken', token);
                    toast.success("Sikeres belépés!");
                    window.location.reload();
                }
                else if (token.message == "Hibás jelszó!") alert("Hibás E-mail cím vagy jelszó!");
            })
            .catch(err => console.log(err));
    }

    const register = async (formData) => {
        await fetch(`${import.meta.env.VITE_BASE_URL}/register`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(token => {
                if (token.message != "0") {
                    sessionStorage.setItem('usertoken', token);
                    alert("Sikeres regisztráció!");
                    window.location.reload();   
                } else {
                    alert(token.message);
                };
            })
            .catch(err => console.log(err));
    }

    const tokenChange = (token) => {
        fetch(`${import.meta.env.VITE_BASE_URL}/getInfo`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(kep => {
            setpKep(kep[0].pKep); 
            setNev(kep[0].Vnev + " " + kep[0].Knev);
            setEmail(kep[0].E_mail);
            setTel(kep[0].Telefonszam);
            if (kep[0].Adoszam != null) {
                setAdo(kep[0].Adoszam);
            } else {
                setAdo("Nincs adószám hozzáadva a fiókhoz!");
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <UserContext.Provider value={{ refresh, update, logout, login, register, tokenChange, pKep, nev, Email, Tel, AdoSz }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
