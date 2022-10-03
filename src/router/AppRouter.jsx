import { Route, Routes, Navigate } from 'react-router-dom';
import { App } from '../App';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={ <App  /> } />
            <Route path="/explore" element={ <App  /> } />
            <Route path="/notifications" element={ <App  /> } />
            <Route path="/profile/:user" element={ <App  /> } />
            <Route path="/settings" element={ <App  /> } />
            <Route path="/*" element={ <Navigate to="/home" /> } />
        </Routes>
    )
}
