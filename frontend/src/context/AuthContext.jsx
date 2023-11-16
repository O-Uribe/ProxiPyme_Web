import { createContext, useState, useContext, useEffect } from "react";
import { registrerRecuest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new error("useAuth tiene que estar dentro del AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    // ESTADOS
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
            const response = await registrerRecuest(user);
            console.log(response.data);
            setUser(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            // console.log(error.response);
            setErrors(error.response.data);
        }
    };
    const signin = async (user) => {
        try {
            const response = await loginRequest(user);
            console.log(response.data);
            setUser(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            // console.log(error.response);
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    });
    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                user,
                isAuthenticated,
                errors,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
