import { useState,useEffect,createContext } from "react";
import { useNavigate } from "react-router-dom";

const FilmekContext=createContext();

export const FilmProvider=({children})=>{
    const[filmek,setFilmek]=useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8000/filmek')
        .then(res=>res.json())
        .then(filmek=>setFilmek(filmek))
        .catch(err=>console.log(err))
    });


    return <FilmekContext.Provider value={{filmek}}>{children}</FilmekContext.Provider>
}


export default FilmekContext;