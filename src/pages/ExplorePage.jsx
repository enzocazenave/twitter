import { useEffect } from 'react';
import { SearchInput, SearchedUser } from '../components/CenterComponents';

export const ExplorePage = () => {

    useEffect(() => {
        document.title = 'Explore / Twitter'
    }, []);

    return (
        <>
            <SearchInput />
            <SearchedUser />
            <SearchedUser />
            <SearchedUser />
            <SearchedUser />
        </>
    )
}
