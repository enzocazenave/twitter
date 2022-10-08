import { createContext, useState } from 'react';

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {

    const [tweets, setTweets] = useState([]);

    const TWEETS = tweets;
    const SET_TWEETS = (array_of_tweets) => setTweets(array_of_tweets);
    const ADD_TWEET = (tweet) => {
        setTweets([
            ...TWEETS,
            tweet
        ])
    } 
    
    return (
        <TweetsContext.Provider 
            value={{
                TWEETS,
                SET_TWEETS,
                ADD_TWEET
            }}
        >
            { children }    
        </TweetsContext.Provider>
    )
}