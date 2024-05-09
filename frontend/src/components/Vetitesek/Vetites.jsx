import React, { useContext } from 'react'
import tizenHat from '../../assets/16_icon.png'
import tizenNyolc from '../../assets/18_icon.png'
import KosarContext from '../../context/KosarContext';

function Vetites({ vetites }) {
    const eredetiDatum = vetites.Datum.split('-');
    const adatok = {
        VTS_Id: vetites.Id,
        darabszam: "1"
    }
    const {ujKosar} = useContext(KosarContext);

    function onSubmit(){
        ujKosar(sessionStorage.getItem("usertoken") ,adatok)
    }
    return (
<div class="bg-white shadow-lg rounded-lg p-4 mb-4 flex text-black w-4/5 m-auto relative">
    <img src={vetites.kepLink} class="w-64 h-100 object-cover rounded-t-lg mr-4" />
    <div className='flex-1'>
        <div class="flex items-center mb-2">
            <h2 class="text-xl font-semibold bg-blue-400 p-2 rounded-xl">{vetites.Mozi_Nev}</h2>
            <p className='mx-3 text-xl'>Szabad helyek: {vetites.Helyek_Szama}</p>
        </div>
        <h1 className='text-5xl'>{vetites.cim} <img src={vetites.Korhatar == "18" ? tizenNyolc : tizenHat} className='inline-block h-16'/></h1>
        <p className='text-2xl mb-2'>{vetites.VTT_TPS_Tipus} {vetites.Kategoria}</p>
        <p className='text-4xl'>Film hossza: {vetites.Hossz}</p>
        <p className='mt-10 text-2xl'>Vetítés Dátuma: {eredetiDatum[0] + "." + eredetiDatum[1] + "." + eredetiDatum[2]} {vetites.IdoPont}</p>
    </div>
    <div className='ml-5 py-20 h-100 w-32 relative'>
        <button className='text-2xl bg-blue-200 p-3 rounded-2xl hover:bg-blue-500 h-full w-full absolute inset-0' onClick={onSubmit}>Kosárba</button>
    </div>
</div>

    )
}

export default Vetites
