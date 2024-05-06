import { useContext, useEffect, useState } from 'react';
import KosarContext from "../../context/KosarContext";
import KosarElem from './KosarElem';

function Kosar()  {
    const { getKosar, kosarak } = useContext(KosarContext);

    useEffect(() => {
        getKosar(sessionStorage.getItem("usertoken"));
    }, []);

    return (
        <div className='absolute rounded-3xl text-gray-200 bg-gray-600 w-50% left-[15%] top-[25%] p-10'>
            <h1 className='text-center text-6xl mb-12'>Kosár</h1>
            {kosarak.map((kosar,i) => (<KosarElem key={i} kosar={kosar}/>))}
        </div>
    )
}

export default Kosar;
