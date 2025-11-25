import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";
import { Swal } from "sweetalert2/dist/sweetalert2";

export const authContext = createContext();
const AuthProvider = ({ routes }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loding,setLoding] = useState(true)

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    // .then(res=> signOut(auth))
    
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogOut = () => {
    return signOut(auth);
  };

  const manageProfile = (name,image)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:image
    })
  }

  // google
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
    
    
  };

  // authInfo
  const authInfo = {
    handleRegister,
    handleLogin,
    handleLogOut,
    handleGoogleLogin,
    manageProfile,
    user,
    setUser,
    loding
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        if(currentUser){
            setUser(currentUser)
            
        }else{
            setUser(null)
        }
        setLoding(false)
        return () =>{
            unsubscribe()
        }
    })
  }, []);

  return (
    <div>
      <authContext.Provider value={authInfo}> {routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
