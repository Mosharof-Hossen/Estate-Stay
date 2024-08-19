
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // crateUserByEmailPassword
    const crateUserByEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login user by Email and password
    const loginByEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // currently signed-in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    console.log(user);
    const authInfo = {
        user,
        crateUserByEmailPassword,
        loginByEmailPassword,
        logOut
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