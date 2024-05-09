import { useState, createContext } from "react";

const VetitesContext = createContext();

export const VetitesProvider = ({ children }) => {
    const [Vetitesek, setVetitesek] = useState([]);
    const [KeresVetites, setKeresVet] = useState([]);

    async function VetitesekFunc(){
        try {
            const response = await fetch(`http://localhost:8000/vetitesek`);
            if (!response.ok) {
                throw new Error('A kérés sikertelen.');
            }
            const vetitesek = await response.json();
            setVetitesek(vetitesek);
        } catch (err) {
            alert(err.message);
        }
    }

    async function KeresVet(filmId){
        try {
            const response = await fetch(`http://localhost:8000/keresvet/${filmId}`);
            if (!response.ok) {
                throw new Error('A kérés sikertelen.');
            }
            const vetitesek = await response.json();
            setKeresVet(vetitesek);
        } catch (err) {
            alert(err.message);
        }
    }


    return (
        <VetitesContext.Provider value={{ VetitesekFunc, Vetitesek, KeresVet, KeresVetites }}>
            {children}
        </VetitesContext.Provider>
    );
}

export default VetitesContext;