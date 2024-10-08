
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // crateUserByEmailPassword
    const crateUserByEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login user by Email and password
    const loginByEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google LogIN
    const loginByGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    // Github Login

    const loginByGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // currently signed-in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        crateUserByEmailPassword,
        loginByEmailPassword,
        logOut,
        loading,
        loginByGoogle,
        loginByGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;