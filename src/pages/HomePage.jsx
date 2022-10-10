import { useContext, useEffect } from 'react';
import { CreateTweet, Tweet } from '../components/CenterComponents';
import { TweetsContext } from '../context/TweetsContext';

export const HomePage = () => {

    const { TWEETS } = useContext(TweetsContext);
    
    useEffect(() => {
        document.title = 'Home / Twitter';    
    }, []);

    return (
        <>
            <CreateTweet />
            {
                TWEETS.map(tweet => ( <Tweet key={ tweet._id } { ...tweet } /> ))
            }
        </>
    )
}
