import { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';

const KosarContext = createContext();

export const KosarProvider = ({ children }) => {
    const [kosarak, setKosarak] = useState([]);

    const getKosar = async (token) => {
        await fetch(`${import.meta.env.VITE_BASE_URL}/kosarak`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(kosarak => {setKosarak(kosarak);})
        .catch(err => alert(err));
    }

    const ujKosar = async (token, adatok) => {
        await fetch(`${import.meta.env.VITE_BASE_URL}/ujkosar`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adatok)
        })
        .then(res => res.json())
        .then(uzenet => {alert(uzenet.message);})
        .catch(err => alert(err));
    }

    const torolKosar = async (token, adatok) => {
        await fetch(`${import.meta.env.VITE_BASE_URL}/torolkosar`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adatok)
        })
        .then(res => res.json())
        .then(uzenet => {alert(uzenet.message);})
        .catch(err => alert(err));
    }


    return (
        <KosarContext.Provider value={{ getKosar, kosarak, ujKosar, torolKosar }}>
            {children}
        </KosarContext.Provider>
    );
}

export default KosarContext;