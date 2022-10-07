import { useContext } from 'react';
import { twitterApi } from '../api';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {

    const { SET_USER, SET_CHECKING, SET_ERROR_MESSAGE } = useContext(AuthContext); 

    const startRegister = async({ name, birthdate, email, username, password }) => {
        SET_CHECKING(true);

        try {
            const { data } = await twitterApi.post('/auth/register', { name, birthdate, email, username, password });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            SET_USER(data);
            SET_CHECKING(false);
        } catch(error) {
            SET_ERROR_MESSAGE(error.response.data?.msg || '');
            SET_CHECKING(false);
            SET_USER({});
        }
    }

    const startLogin = async({ email, password }) => {
        SET_CHECKING(true);

        try {
            const { data } = await twitterApi.post('/auth/login', { email, password });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
        
            SET_USER(data);
            SET_CHECKING(false);
        } catch(error) {
            SET_ERROR_MESSAGE(error.response.data.msg || 'An unknown error ocurred');
            SET_CHECKING(false);
            SET_USER({});
        }
    }

    return {
        //* METODOS
        startLogin,
        startRegister
    }
}
