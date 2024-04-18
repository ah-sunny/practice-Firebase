import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.init';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)


    const createUser = ( email, pass ) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const signInUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logOut =()=>{
        setLoading(true)
        signOut(auth)
    }


useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
        setLoading(false)
        console.log('current value of current user',currentUser)
    })
    return ()=>{
        unSubscribe();
    }
},[])

    const authInfo = { user,loading, createUser,signInUser,logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}