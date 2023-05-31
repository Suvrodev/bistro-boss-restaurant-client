import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext=createContext("")
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState("")
    const [loading,setLoading]=useState(true)

    ///login by email start
    ///login by email end

    ///login by google start
    const googleProvider=new GoogleAuthProvider();
    const loginByGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    ///login by google end

    ///signUp by email start
    const signUpByEmail=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    ///signUp by email end

    ///Update User with Email and password start
    const updateUserProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    ///Update User with Email and password end

    ///sign in By email start
    const signInByEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    ///sign in By email end


    ///logout start
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    ///logout end

    ///check user login or not start
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
           // console.log('Current: ',currentUser)
            setLoading(false)
        });
        return ()=>{
            return unSubscribe()
        }
    },[])
    ///check user login or not end


    const authInfo={
        user,
        loading,
        loginByGoogle,
        signUpByEmail,
        signInByEmail,
        logOut,
        updateUserProfile,

    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;