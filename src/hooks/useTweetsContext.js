import { useContext } from 'react'
import { twitterApi } from '../api';
import { AuthContext } from '../context/AuthContext'
import { TweetsContext } from '../context/TweetsContext';

export const useTweetsContext = () => {

    const { USER, SET_ERROR_MESSAGE } = useContext(AuthContext);
    const { ADD_TWEET, SET_TWEETS, SET_SEARCHED_USERS } = useContext(TweetsContext);

    const startCreate = async({ text }) => {
        try {
            const { data } = await twitterApi.post('/tweets', { owner: USER.id, text });
            ADD_TWEET(data.tweet);
        } catch(error) {
            SET_ERROR_MESSAGE(error.response.data?.msg || 'An unknown error ocurred');
        }
    }   

    const getTweets = async() => {
        try {
            const { data } = await twitterApi.get('/tweets');
            SET_TWEETS(data.tweets);
        } catch(error) {
            SET_ERROR_MESSAGE(error.response.data?.msg || 'An unknown error ocurred');
        }
    }

    const getProfileInfo = async({ id }) => {
        try { 
            const { data } = await twitterApi.post('/user', { id });
            return data;
        } catch(error) {
            SET_ERROR_MESSAGE(error.response.data?.msg || 'An unknown error ocurred');
        }
    }

    const getProfileAllInfo = async({ username }) => {
        try {
            const { data } = await twitterApi.post('/all_user', { username });
            return data;
            
        } catch(error) {
            SET_ERROR_MESSAGE(error.response.data?.msg || 'An unknown error ocurred');
        }
    }

    const getSearchedUsers = async({ query }) => {
        try {
            const { data } = await twitterApi.post('/search_users', { query });
            SET_SEARCHED_USERS(data.users);
        } catch(error) {
            SET_ERROR_MESSAGE(error.response.data?.msg || 'An unknown error ocurred');
        }
    }

    return {
        startCreate,
        getTweets,
        getProfileInfo,
        getProfileAllInfo,
        getSearchedUsers
    }
}
