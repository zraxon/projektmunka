import { useState,useEffect,useContext } from "react";
import {useNavigate} from 'react-router-dom';
import UserContext from "../context/UserContext";
import {toast} from "react-toastify";


function ImageUpload() {
    const {update}=useContext(UserContext);
    const navigate=useNavigate();
    const token=sessionStorage.getItem('usertoken');
    const [images,setImages]=useState([]);

    useEffect(()=>{
        if(!token){
            navigate('/login');
        }
    },[token]);

    const onSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        for(let i=0;i<images.length;i++){
            formData.append("file"+i,images[i])
        }
        kuldes(formData);
        navigate('/images');

    }

    const kuldes=(adat)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/files/upload`,{
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token}`
            },
            body:adat
        })
        .then(res=>res.json())
        .then(valasz=>{
            //alert(valasz.message);
            toast.success(valasz.message);
            update()})
        .catch(err=>toast.error(err));
    }

    const imageChange=(e)=>{
        console.log(e.target.files);
        setImages([...images,...e.target.files]);
    }



  return (
    <div>
        <h2 className="text-center font-bold text-2xl my-10">Képek feltöltése</h2>
        <div className="flex justify-center items-center">
            <div className="flex-column">
                <form onSubmit={onSubmit}>
                    <input onChange={imageChange} type="file" className="file-input file-input-bordered" multiple required/>
                    <button className="btn btn-primary" type="submit">Feltöltés</button>
                    
                </form>
            </div>
        </div>

    </div>
  )
}

export default ImageUpload