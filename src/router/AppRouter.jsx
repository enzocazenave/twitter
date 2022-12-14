import { useContext, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { App } from '../App';
import { AuthContext } from '../context/AuthContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { LoginPage, RegisterPage, LoadingPage } from '../pages';

export const AppRouter = () => {

    const { ON_CHECKING, USER } = useContext(AuthContext);
    const { checkAuthToken } = useAuthContext();

    useEffect(() => { checkAuthToken(); }, []);

    if (ON_CHECKING) {
        return (
            <LoadingPage />
        )
    }   

    return (
        <Routes>
            {
                (USER.id)
                ? (
                    <>
                        <Route path="/home" element={ <App  /> } />
                        <Route path="/explore" element={ <App  /> } />
                        <Route path="/notifications" element={ <App  /> } />
                        <Route path="/profile/:user" element={ <App  /> } />
                        <Route path="/profiles/:username" element={ <App  /> } />
                        <Route path="/settings" element={ <App  /> } />
                        <Route path="/*" element={ <Navigate to="/home" /> } />
                    </>
                  )
                : (
                    <>
                        <Route path="/login" element={ <LoginPage /> } />
                        <Route path="/register" element={ <RegisterPage /> } />
                        <Route path="/*" element={ <Navigate to="/login" /> } />
                    </>
                  )
            }
        </Routes>
    )
}
