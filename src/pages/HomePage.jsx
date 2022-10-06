import { useEffect } from 'react';
import { CreateTweet, Tweet } from '../components/CenterComponents';

export const HomePage = () => {

    useEffect(() => {
        document.title = 'Home / Twitter'
    }, []);

    return (
        <>
            <CreateTweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
        </>
    )
}
