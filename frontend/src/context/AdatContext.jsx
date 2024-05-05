import { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';

const AdatContext = createContext();

export const AdatProvider = ({ children }) => {

    const Change = async (token, formData, mod) => {
        await fetch(`${import.meta.env.VITE_BASE_URL}/modosit${mod}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(szoveg => {alert(szoveg.message); window.location.reload();})
        .catch(err => alert(err));
    }


    return (
        <AdatContext.Provider value={{ Change }}>
            {children}
        </AdatContext.Provider>
    );
}

export default AdatContext;