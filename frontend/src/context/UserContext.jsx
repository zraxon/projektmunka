import { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [refresh, setRefresh] = useState(false);
    const [Email, setE_mail] = useState("");

    const update = () => {
        setRefresh(prev => !prev);
    }

    const logout = () => {
        sessionStorage.removeItem('usertoken');
        location.reload();
    }

    const login = (formData, method) => {
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
                    setE_mail(formData.E_mail || formData.E_mail2);
                }
                else if (token.message == "0") alert("Hibás E-mail cím vagy jelszó!")
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
                    setE_mail(formData.E_mail || formData.E_mail2);
                } else {
                    alert(token.message);
                };
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        if (Email) {
            fetch(`${import.meta.env.VITE_BASE_URL}/getKep/${Email}`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(kep => sessionStorage.setItem("ProfilePicture", (kep[0].pKep)))
                .catch(err => console.log(err));
        }
    }, [Email]);
    return (
        <UserContext.Provider value={{ refresh, update, logout, login, register }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
