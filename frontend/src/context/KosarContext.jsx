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


    return (
        <KosarContext.Provider value={{ getKosar, kosarak }}>
            {children}
        </KosarContext.Provider>
    );
}

export default KosarContext;