import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContexts';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase.config';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email , password)
   }

//    google 
const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
}

//logout 
const logOut = () => {
    setLoading(true)
    return signOut(auth)
}

// observe user state 
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
       setLoading(false)
    })

    return () => {
        unSubscribe();
    }

}, [])

    const authInfo = {
        user,
        loading,
      registerUser,
      signInUser,
      signInGoogle,
      logOut
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;