import { useContext, useEffect } from 'react';
import { UserProfile, Tweet } from '../components/CenterComponents';
import { AuthContext } from '../context/AuthContext';
import { TweetsContext } from '../context/TweetsContext';
import { useTweetsContext } from '../hooks/useTweetsContext';

export const ProfilePage = () => {

    const { TWEETS } = useContext(TweetsContext);
    const { USER } = useContext(AuthContext);
    const { getTweets } = useTweetsContext();

    useEffect(() => {
        document.title = `${USER.name} (@${USER.username})`;
        getTweets();
    }, []);

    const my_tweets = TWEETS.filter(tweet => tweet.owner == USER.id);

    return (
        <>
            <UserProfile />
            {
                my_tweets.reverse().map(tweet => ( <Tweet key={ tweet._id } { ...tweet } /> ))
            }
        </>
    )
}
