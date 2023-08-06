import { useState } from "react";

import { useDispatch } from "react-redux";

import { Login } from "../../../redux/userSlice";


export const useLogin = (email,password)=>{

    const [loading, setLoading] = useState(null);
    const [error,setError] = useState(null)

    const dispatch=useDispatch();

    const Loggin =async ()=>{

        setLoading(true)
        setError(null)

     const response = await fetch("http://localhost:4500/api/users/login",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
     })
     const data = await response.json()

     if(!response.ok){
        setError(false)
        setError(data.error)
     }

     if(response.ok){
        localStorage.setItem("Users",JSON.stringify(data))
        console.log('Login Success')
        dispatch(Login(data))
        setLoading(false)
     }

    }

    return {Loggin,error,loading}

}