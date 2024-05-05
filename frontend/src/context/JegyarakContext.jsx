import { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';

const JegyContext = createContext();

export const JegyProvider = ({ children }) => {

    async function JegyArak(){
        try {
            const response = await fetch(`http://localhost:8000/filmek/`);
            if (!response.ok) {
                throw new Error('A kérés sikertelen.');
            }
            const filmek = await response.json();
            setOFilmek(filmek);
        } catch (err) {
            alert(err.message);
        }
    }


    return (
        <JegyContext.Provider value={{ JegyArak }}>
            {children}
        </JegyContext.Provider>
    );
}

export default JegyContext;