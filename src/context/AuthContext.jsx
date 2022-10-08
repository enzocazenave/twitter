import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [onChecking, setOnChecking] = useState(false);
    const [error, setError] = useState("");

    const USER = user;
    const ON_CHECKING = onChecking;
    const ERROR = error;
    const SET_USER = (user_object = {}) => setUser(user_object); 
    const SET_CHECKING = (bool) => setOnChecking(bool);
    const SET_ERROR_MESSAGE = (message) => setError(message);

    return (
        <AuthContext.Provider 
            value={{
                SET_USER,
                SET_CHECKING,
                SET_ERROR_MESSAGE,                
                ON_CHECKING,
                ERROR,
                USER   
            }}
        >
            { children }    
        </AuthContext.Provider>
    )
}