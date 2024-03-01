import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Vedett() {
    const[vedettinfo,setVedettInfo]=useState(null);
    const navigate=useNavigate();

    const token=sessionStorage.getItem('usertoken');
    //const token="$5556hkpgpogks";

    useEffect(()=>{
        if(token){
            //Kérés küldése
            fetch(`${import.meta.env.VITE_BASE_URL}/api/user/vedett`,{
                method:'GET',
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(!data.message){
                    setVedettInfo(data);
                } else {
                    console.log(data.message);
                }
            })
            .catch(err=>console.log(err));

        } else {
            navigate('/login');
        }
    },[]);


  return (
    <div>Vedett
        {vedettinfo}
    </div>
  )
}

export default Vedett