import { useEffect } from 'react';
import { UserProfile, Tweet } from '../components/CenterComponents';

export const ProfilePage = () => {

    useEffect(() => {
        document.title = 'Chiki Cazenave (@chikicazenave)';
    }, []);

    return (
        <>
            <UserProfile />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
        </>
    )
}
