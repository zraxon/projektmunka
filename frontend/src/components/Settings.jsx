import { useContext, useEffect } from 'react';
import UserContext from "../context/UserContext";

function Settings()  {
    const { tokenChange, nev, Email, Tel, AdoSz } = useContext(UserContext);

    useEffect(() => {
        tokenChange(sessionStorage.getItem("usertoken"));
    }, []);

    return (
        <div>
            <h1>Beállítások</h1>
            <div>
                <h1>Név: {nev}</h1>
                <h1>E-mail cím: {Email}</h1>
                <h1>Telefonszám: {Tel}</h1>
                <h1>Adószám: {AdoSz}</h1>
            </div>
        </div>
    )
}

export default Settings;
