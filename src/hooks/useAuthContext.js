import { useContext } from 'react';
import { twitterApi } from '../api';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {

    const { SET_USER, SET_CHECKING, SET_ERROR_MESSAGE, USER } = useContext(AuthContext); 

    const startRegister = async({ name, birthdate, email, username, password }) => {
        SET_CHECKING(true);

        try {
            const { data } = await twitterApi.post('/auth/register', { name, birthdate, email, username, password, 
                profile_img: '', 
                profile_banner: '',
                bio: '',
                location: '',
                following: 0,
                followers: 0,
                website: '',
                joined: new Date().getTime()
            });

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

    const startLogout = () => {
        SET_USER({});
        localStorage.clear();
    }

    const startEdit = async({ name, bio, location, website }) => {
        try {
            const dataCompare = { name, bio, location, website, id: USER.id }

            if (USER.name == dataCompare.name && USER.bio == dataCompare.bio && USER.location == dataCompare.location && USER.website == dataCompare.website) return;
            
            const { data } = await twitterApi.post('/auth/edit', dataCompare);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            SET_USER(data);
        } catch(error) {
            SET_ERROR_MESSAGE(error.response.data.msg || 'An unknown error ocurred');
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');

        if (!token) {
            SET_USER({});
            return
        }

        try {
            const { data } = await twitterApi.get('/auth/renew');
            SET_USER(data);
        } catch(error) {
            localStorage.clear();
            SET_USER({});
        }
    }

    return {
        //* METODOS
        startLogin,
        startRegister,
        startLogout,
        startEdit,
        checkAuthToken    
    }
}
