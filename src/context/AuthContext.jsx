import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

// Context
const AuthContext = createContext();

// Provider
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Signup
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout = () => {
        return signOut(auth);
    };

    // Listen for auth changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

// Custom hook
export function useAuth() {
    return useContext(AuthContext);
}
