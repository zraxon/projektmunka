    import { useState,useEffect,createContext } from "react";

    const FilmekContext=createContext();

    export const FilmProvider=( {children} ) => {
        const[filmek,setFilmek]=useState([]);
        const[ofilm, setOFilmek]=useState([]);
        
        async function keres(filmId){
            try {
                if (filmId !== "") {
                    const response = await fetch(`http://localhost:8000/filmek/${filmId}`);
                    if (!response.ok) {
                        throw new Error('A kérés sikertelen.');
                    }
                    const filmek = await response.json();
                    setFilmek(filmek);
                }
            } catch (err) {
                alert(err.message);
            }
        }

        async function keresOFilm(){
            try {
                const response = await fetch(`http://localhost:8000/filmek/`);
                if (!response.ok) {
                    throw new Error('A kérés sikertelen.');
                }
                const filmek = await response.json();
                setOFilmek(filmek);
            } catch (err) {
                alert(err.message);
            }
        }

        return <FilmekContext.Provider value={{ofilm, filmek, keres, keresOFilm}}>{children}</FilmekContext.Provider>
    }


    export default FilmekContext;