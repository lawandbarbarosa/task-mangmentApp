import { useState,useEffect } from "react";

import { useDispatch } from "react-redux";
import { Login } from "../../../redux/userSlice";

export const useSignup = ()=>{
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    const dispatch = useDispatch()

    const signup = async(email,password,username) =>{

        setLoading(false)
        setError(null)

        const response = await fetch("http://localhost:4500/api/users/signup",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email,password,username})
        })
        const data = await response.json()

        if(!response.ok){
            setError(data.error)
            setLoading(false)
        }

        if(response.ok){
       localStorage.setItem("Users",JSON.stringify(data))
       dispatch(Login(data))
       setLoading(false)
       console.log(data)
        }



    }

    return {signup,loading,error}

}