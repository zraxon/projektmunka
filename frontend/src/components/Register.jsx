import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register()  {
    const navigate = useNavigate();

    const kuldes=(formData,method)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/register`,{
            method:method,
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(token=>{
            if(!token.message){
                sessionStorage.setItem('usertoken',token);
                alert("Sikeres regisztráció!");
                navigate('/');
            } else {
                alert(token.message);
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
        email:"",
        age:"",
        password:"",
        passwordAgain:""

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
                        <p className="text-gray-700 mb-6">Kérjük regisztáljon.</p>
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="username">
                                    Felhasználói név
                                </label>
                                <input onChange={writeData} value={formData.username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="felhasználói név"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="email">
                                    E-mail cím
                                </label>
                                <input onChange={writeData} value={formData.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="e-mail cím"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="age">
                                    Életkor
                                </label>
                                <input onChange={writeData} value={formData.age} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="felhasználói név"/>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" for="password">
                                    Jelszó
                                </label>
                                <input onChange={writeData} value={formData.password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="jelszó"/>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" for="passwordAgain">
                                    Jelszó ismét
                                </label>
                                <input onChange={writeData} value={formData.passwordAgain} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="passwordAgain" type="password" placeholder="jelszó ismét"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Küldés
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register