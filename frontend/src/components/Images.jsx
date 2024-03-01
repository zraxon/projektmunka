import {useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Image from './Image';
import UserContext from '../context/UserContext';

function Images() {
    const {refresh}=useContext(UserContext);
    const[images,setImages]=useState({});
    const token=sessionStorage.getItem('usertoken');
    const navigate=useNavigate();

    useEffect(()=>{
        if(token){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
                method:'GET',
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(images=>setImages(images))
            .catch(err=>alert(err));
        } else {
            navigate('/login');
        }
    },[refresh]);

  return (
    <div>
        <h2 className="text-center font-bold text-2xl my-10">A felhasználó képei</h2>
        {
            token && images.images!=null && images.images.length>0 
            ?
            <>
                <p className='text-center'>{images.images.length}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 p-4">

               
                {
                   images.images.map((image,i)=>(
                        <Image key={i} path={images.path} imagename={image.imageName} imageid={image._id}/>
                   ))
                }

                </div>
                
                
            </>
            :
            <>
                <h2 className="text-center font-bold text-2xl my-10">Nincsenek feltöltött képek!</h2>
            </>
        }

    </div>
  )
}

export default Images