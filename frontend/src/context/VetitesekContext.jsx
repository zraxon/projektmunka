import { useState, createContext } from "react";

const VetitesContext = createContext();

export const VetitesProvider = ({ children }) => {
    const [Vetitesek, setVetitesek] = useState([])

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


    return (
        <VetitesContext.Provider value={{ VetitesekFunc, Vetitesek }}>
            {children}
        </VetitesContext.Provider>
    );
}

export default VetitesContext;