import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tweet, UserProfiles } from '../components/CenterComponents';
import { AuthContext } from '../context/AuthContext';
import { TweetsContext } from '../context/TweetsContext';
import { useTweetsContext } from '../hooks/useTweetsContext';

export const ProfilesPage = () => {

    const { username } = useParams();

    useEffect(() => {
        document.title = `@${username}`;
    }, []);

    return (
        <>
            <UserProfiles username={ username } />
        </>
    )
}
