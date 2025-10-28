import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    console.log(user)
    


    const [loading, setLoading] = useState(true)

const createUser = (email , password)=>{
    setLoading(true)
  return createUserWithEmailAndPassword(auth, email,password)
}

const logInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email, password)
}

const updateUser = (updatedData) =>{
    return updateProfile(auth.currentUser,updatedData)
}


const logOut = ()=>{
    return signOut(auth)
}

useEffect(()=> {
   const unSubsCribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })
    return () =>{
        unSubsCribe()
    }

},[])




const userInfo ={
    user,
    setUser,
    createUser,
    logInUser,
    loading,
    setLoading,
    logOut,
    updateUser,
}


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;