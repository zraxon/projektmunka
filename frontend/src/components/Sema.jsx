import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmekContext from "../context/FilmekContext";
import VeteitesekContext from "../context/VetitesekContext";
import Vetites from "./Vetitesek/Vetites";

function Sema(){
  const { filmId } = useParams();

  const { filmek, keres } = useContext(FilmekContext);

  const { KeresVet, KeresVetites } = useContext(VeteitesekContext);
  useEffect(() => {
    const fetchData = async () => { await keres(filmId) }
    const keresVetitesek = async () => { await KeresVet(filmId) }
    fetchData()
    keresVetitesek()
  }, [filmId])

  return(
    <div>
      {filmek.length == 0 ? 
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center">
                  <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                  <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Nem található ilyen film.</p>
                  <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                  <a href="#" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
              </div>   
          </div>
        </section>
      : 
<div className="absolute bg-slate-500 rounded-xl p-10 left-[13%] top-[25%]">
    <img src={filmek[0].kepLink} className="max-w-[28rem] h-auto inline-block mr-6" />
    <div className="inline-block bg-slate-200 p-2 rounded-xl text-black w-[68rem] align-top text-xl">
        <h1 className="text-6xl text-center mb-10">{filmek[0].Cim}</h1>
        <h2 className="mb-2">Kategória: {filmek[0].Kategoria}</h2>
        <h2 className="mb-2">Film hossza: {filmek[0].Hossz}</h2>
        <h2 className="mb-2">Rendező: {filmek[0].Rendezo}</h2>
        <h2 className="mb-2">Szereplők: {filmek[0].Szereplok}</h2>
        <h2 className="mb-2">Ismertető: {filmek[0].leiras}</h2>
        <div className="bg-gray-400 rounded-xl p-5">
          {KeresVetites.length > 0 ?
                    <div>
                    <h1 className="text-white text-6xl mb-6">Közelgő vetítések:</h1>
                    {KeresVetites.map((vetites,i) => (<Vetites key={i} vetites={vetites}/>))}
                    </div>
                    :
                    <h1 className="text-white text-6xl mb-6">Nincs közelgő vetítés!</h1>
          }

        </div>
    </div>
</div>




     }
    </div>
  )
}

export default Sema