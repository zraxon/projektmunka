import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

function Login() {
    const navigate = useNavigate();

    const kuldes=(formData,method)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/user/login`,{
            method:method,
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(token=>{
            if(!token.message){
                sessionStorage.setItem('usertoken',token);
                //alert("Sikeres belépés!");
                toast.success("Sikeres belépés!");
                navigate('/');
            } else {
                //alert(token.message);
                toast.warning(token.message);
            }

        })
        .catch(err=>console.log(err));
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        kuldes(formData,'POST');
        //action    
    }
    
    let formObj={};
    
    formObj={
        username:"",
        password:"",
    }
    
    const[formData,setFormData]=useState(formObj);

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }


    return (
        <div>
            <div className="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
                <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">User Login</h2>
                        <p className="text-gray-700 mb-6">Kérjük lépjen be.</p>
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="username">
                                    Felhasználói név
                                </label>
                                <input onChange={writeData} value={formData.username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="felhasználói név"/>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" for="password">
                                    Jelszó
                                </label>
                                <input onChange={writeData} value={formData.password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="jelszó"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Belépés
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login