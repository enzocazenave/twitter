import { createContext, useState } from 'react';

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {

    const [tweets, setTweets] = useState([]);
    const [usersSearched, setUsersSearched] = useState([]);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    const TWEETS = tweets;
    const SET_TWEETS = (array_of_tweets) => setTweets(array_of_tweets);
    const ADD_TWEET = (tweet) => {
        setTweets([
            tweet,
            ...TWEETS
        ])
    } 

    const SEARCHED_USERS = usersSearched;
    const SET_SEARCHED_USERS = (users_) => setUsersSearched(users_);

    const SUGGESTED_USERS = suggestedUsers;
    const SET_SUGGESTED_USERS = (users_) => setSuggestedUsers(users_);
    
    return (
        <TweetsContext.Provider 
            value={{
                TWEETS,
                SET_TWEETS,
                ADD_TWEET,
                SEARCHED_USERS,
                SET_SEARCHED_USERS,
                SUGGESTED_USERS,
                SET_SUGGESTED_USERS
            }}
        >
            { children }    
        </TweetsContext.Provider>
    )
}