import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        signInWithPopup(auth,googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if (user) {
                setUser(user);
            }
        })
    },[])

    const logOut = () =>{
        signOut(auth)
            .then(()=>{
                setUser({});
            })
    }

    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
};

export default useFirebase;