import { useContext, useEffect } from 'react';
import { CreateTweet, Tweet } from '../components/CenterComponents';
import { AuthContext } from '../context/AuthContext';
import { TweetsContext } from '../context/TweetsContext';
import { useTweetsContext } from '../hooks/useTweetsContext';

export const HomePage = () => {

    const { TWEETS } = useContext(TweetsContext);
    
    const { getTweets } = useTweetsContext();

    useEffect(() => {
        document.title = 'Home / Twitter';
        getTweets();
    }, []);

    return (
        <>
            <CreateTweet />
            {
                TWEETS.reverse().map(tweet => ( <Tweet key={ tweet._id } { ...tweet } /> ))
            }
        </>
    )
}
