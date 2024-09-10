import {useState} from "react"
import {useAuthContext} from "./useAuthContext.js"

export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (formdata) => {
        setIsLoading(true)
        setError(null)
        if (formdata.role === "user"){
            const response = await fetch("http://localhost:4000/api/auth/signup",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({
                    "firstName": formdata.firstName,
                    "lastName": formdata.lastName,
                    "contact": formdata.phoneNumber,
                    "password": formdata.password,
                    "email": formdata.email,
                    "preferredLanguage": formdata.preferredLanguage,
                    "dateOfBirth": formdata.dob,
                    "gender": formdata.gender,
                    "address": formdata.address
                })
            })
    
            const json = await response.json()
            
    
            if (!response.ok){
                setIsLoading(false)
                setError(json.error)
            }
            if (response.ok){
                localStorage.setItem('user',JSON.stringify(json))
                dispatch({type: "LOGIN",payload:json})
                setIsLoading(false)
            } 
        }else{
            const response = await fetch("http://localhost:4000/api/auth/professional-signup",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({
                    "name": formdata.name,
                    "contact": formdata.contactNumber,
                    "password": formdata.password,
                    "email": formdata.email,
                    "address": formdata.address,
                    "mapsLink": formdata.link,
                    "specialty": formdata.specialization,
                    "licenseNumber": formdata.proofOfIdentity
                })
            })
    
            const json = await response.json()
            
    
            if (!response.ok){
                setIsLoading(false)
                setError(json.error)
            }
            if (response.ok){
                localStorage.setItem('user',JSON.stringify(json))
                dispatch({type: "LOGIN",payload:json})
                setIsLoading(false)
            } 
        }
    }
    return {signup,isLoading,error}
}