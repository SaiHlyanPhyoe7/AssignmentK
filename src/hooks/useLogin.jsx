import {useState} from "react";

// firebase imports
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/config";

export const useLogin = ()=>{
    const [error,setError] = useState(null)

    const login = (email,password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((res)=>{
                console.log('user logged in :' ,res.user)
            })
            .catch((err)=>{
                setError(err.message)
            })
    }
    return {error, login}
}
