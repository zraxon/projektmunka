import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Image from "./Image";
import UserContext from "../context/UserContext";


function ImagesBin() {
    const {refresh}=useContext(UserContext);
    const[images,setImages]=useState([]);
    const[binImages,setBinImages]=useState([]);
    const navigate=useNavigate();
    const token=sessionStorage.getItem('usertoken');

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/imagesbin`,{
            method:'GET',
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(images=>{
            console.log(images);
            let tempimages=[];
            images.forEach(image => {
                let arrayBuffer=new Uint8Array(image.imageData.data);
                const blob=new Blob([arrayBuffer],{type:"image/png"});
                const img=URL.createObjectURL(blob);
                tempimages.push(img);
            });
            setImages(images);
            setBinImages(tempimages);
        })
        .catch(err=>console.log(err));
    },[refresh]);


  return (
    <div>
        <p className="text-2xl text-center">Képek adatbázisból</p>
        {
            binImages.map((image,i)=>(
            <p key={i}>
                <img className="w-48" src={image} />
                {images[i].imageName}
                <button className="btn btn-primary m-2">Törlés</button></p>))
        }
        
    </div>
  )
}

export default ImagesBin