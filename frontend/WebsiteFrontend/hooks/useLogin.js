import {useState} from "react"
import {useAuthContext} from "./useAuthContext.js"

export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (formData) => {
        setIsLoading(true)
        setError(null)
        if (formData.role === "user"){
            const response = await fetch("http://localhost:4000/api/auth/signin",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({
                    "contact": formData.contact,
                    "password": formData.password,
                })
            })
    
            const json = await response.json()
            
            if (!response.ok){
                setIsLoading(false)
                setError(json.err)
            }
            if (response.ok){
                //save user to local storage
                localStorage.setItem('user',JSON.stringify(json))
    
                //update the auth
                dispatch({type: "LOGIN",payload:json})
                setIsLoading(false)
            } 
        }else{
            const response = await fetch("http://localhost:4000/api/auth/professional-signin",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({
                    "email": formData.email,
                    "password": formData.password,
                })
            })
    
            const json = await response.json()
            
            if (!response.ok){
                setIsLoading(false)
                setError(json.err)
            }
            if (response.ok){
                //save user to local storage
                localStorage.setItem('user',JSON.stringify(json))
    
                //update the auth
                dispatch({type: "LOGIN",payload:json})
                setIsLoading(false)
            } 
        }
    }
    return {login,isLoading,error}
}