import { useState } from "react";
import { useParams } from "react-router-dom";

function Sema(){
    const []
    fetch(`http://localhost:8000/filmek`,{
        method:"GET",
        headers:{"Content-type":"application/json"}
    })
    .then(adat => {
        adatok.push(adat.json()) 
    })
    .catch(err=>console.log(err));
    console.log(adatok)
    console.log(adatok)

    const { filmNev } = useParams();

  return(
    <div>
      <h1> Film neve: {filmNev} </h1>
    </div>
  )
}

export default Sema