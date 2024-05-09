import { useContext } from 'react';
import tizenHat from '../../assets/16_icon.png'
import tizenNyolc from '../../assets/18_icon.png'
import KosarContext from '../../context/KosarContext';

function KosarElem({kosar})  {
    const {torolKosar} = useContext(KosarContext);

    // ISO 8601-es dátum string átalakítása a JavaScript Date objektummá
    const datum = new Date(kosar.D2);

    // Időzóna korrekciója
    const modositottDatum = datum.toLocaleString("hu-HU", {timeZone: "Europe/Budapest"});

    // A pontok cserélése kötőjelekre és a felesleges space eltávolítása
    const veglegesDatum = modositottDatum.replace(/\./g, '-').replace(/\s+/g, '').replace(/-(?=[^:]*$)/, 'T');
    
    const adatok = {
        Datum: veglegesDatum,
        VTS_Id: kosar.Id
    }

    return (
        <div class="bg-white shadow-lg rounded-lg p-4 mb-4 flex text-black">
            <img src={kosar.kepLink} class="w-64 h-100 object-cover rounded-t-lg mr-4" />
            <div>
                <div class="flex items-center mb-2">
                    <p className='mx-3 text-xl'>Darabszám: {kosar.Darabszam}</p>
                </div>
                <h1 className='text-5xl'>{kosar.cim} <img src={kosar.Korhatar == "18" ? tizenNyolc : tizenHat} className='inline-block h-16'/></h1>
                <p className='text-2xl mb-2'>{kosar.VTT_TPS_Tipus} {kosar.Kategoria}</p>
                <p className='text-4xl'>Film hossza: {kosar.Hossz}</p>
                <p className='text-4xl'>Vetítés Dátuma: {kosar.Datum} {kosar.IdoPont}</p>
            </div>
            <div className='ml-20 py-20 h-100 w-64 relative'>
                <button className='text-2xl bg-blue-200 p-3 rounded-2xl hover:bg-blue-500 h-1/2 w-full absolute top-0 left-0'>Fizetés</button>
                <button className='text-2xl bg-red-200 p-3 rounded-2xl hover:bg-red-500 h-1/2 w-full absolute bottom-0 left-0' onClick={() => torolKosar(sessionStorage.getItem("usertoken"), adatok)}>Törlés</button>
            </div>
        </div>
    )
}

export default KosarElem;
