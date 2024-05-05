import { useState, createContext, useEffect } from "react";

const JegyContext = createContext();

export const JegyProvider = ({ children }) => {
    const [jegyArak, setJegyArak] = useState([])

    async function Jegyek(){
        try {
            const response = await fetch(`http://localhost:8000/jegyarak`);
            if (!response.ok) {
                throw new Error('A kérés sikertelen.');
            }
            const jegyArak = await response.json();
            setJegyArak(jegyArak);
        } catch (err) {
            alert(err.message);
        }
    }


    return (
        <JegyContext.Provider value={{ Jegyek, jegyArak }}>
            {children}
        </JegyContext.Provider>
    );
}

export default JegyContext;