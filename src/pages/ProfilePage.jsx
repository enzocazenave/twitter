import { useContext, useEffect } from 'react';
import { UserProfile, Tweet } from '../components/CenterComponents';
import { AuthContext } from '../context/AuthContext';
import { TweetsContext } from '../context/TweetsContext';
import { useTweetsContext } from '../hooks/useTweetsContext';

export const ProfilePage = () => {

    const { TWEETS } = useContext(TweetsContext);
    const { USER } = useContext(AuthContext);

    useEffect(() => {
        document.title = `${USER.name} (@${USER.username})`;
    }, []);

    const my_tweets = TWEETS.filter(tweet => tweet.owner.id == USER.id);

    return (
        <>
            <UserProfile />
            {
                my_tweets.map(tweet => ( <Tweet key={ tweet._id } { ...tweet } /> ))
            }
        </>
    )
}
