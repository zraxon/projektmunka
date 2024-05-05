import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmekContext from "../context/FilmekContext";

function Sema(){
  const { filmId } = useParams();

  const { filmek, keres } = useContext(FilmekContext);
  useEffect(() => {
    const fetchData = async () => { await keres(filmId) }
    fetchData()
  }, [filmId])


  return(
    <div>
        {filmek.length == 0 ? <h1> Nincs ilyen film</h1> :  ( <div>
        
        <h1> Film neve: {filmek.length > 0 && filmek[0].Cim} </h1>
        <h2> Szereplők: {filmek.length > 0 && filmek[0].Szereplok}</h2>
       </div>)}
    </div>
  )
}

export default Sema