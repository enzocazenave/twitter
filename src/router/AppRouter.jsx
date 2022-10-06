import { Route, Routes, Navigate } from 'react-router-dom';
import { App } from '../App';
import { LoginPage, RegisterPage } from '../pages';

export const AppRouter = () => {

    const auth = true;

    return (
        <Routes>
            {
                (auth)
                ? (
                    <>
                        <Route path="/home" element={ <App  /> } />
                        <Route path="/explore" element={ <App  /> } />
                        <Route path="/notifications" element={ <App  /> } />
                        <Route path="/profile/:user" element={ <App  /> } />
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
