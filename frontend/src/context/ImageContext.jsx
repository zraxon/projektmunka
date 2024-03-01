import {createContext,useContext} from 'react';
import UserContext from './UserContext';
import {toast} from 'react-toastify';

const ImageContext=createContext();

export const ImageProvider=({children})=>{
    const {update}=useContext(UserContext);
    const token=sessionStorage.getItem('usertoken');

    const imgDelete=(imageId)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
            method:'DELETE',
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify({imageId})
        })
        .then(res=>res.json())
        .then(valasz=>{
            toast.success(valasz.message,{position:'top-left',autoClose:1000});
            //alert(valasz.message);
            update()})
        .catch(err=>alert(err));
    }
    const imgDeleteBin=(imageId)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/imagesbin`,{
            method:'DELETE',
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify({imageId})
        })
        .then(res=>res.json())
        .then(valasz=>{
            toast.success(valasz.message,{position:'top-left',autoClose:1000});
            //alert(valasz.message);
            update()})
        .catch(err=>alert(err));
    }

    return <ImageContext.Provider value={{imgDelete,imgDeleteBin}}>{children}</ImageContext.Provider>
}

export default ImageContext;