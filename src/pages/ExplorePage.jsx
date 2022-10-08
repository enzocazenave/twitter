import { useContext } from 'react';
import { useEffect } from 'react';
import { SearchInput, SearchedUser } from '../components/CenterComponents';
import { TweetsContext } from '../context/TweetsContext';

export const ExplorePage = () => {

    const { SEARCHED_USERS } = useContext(TweetsContext);

    useEffect(() => {
        document.title = 'Explore / Twitter'
    }, []);

    return (
        <>
            <SearchInput />
            {
                SEARCHED_USERS.map(user => (
                    <SearchedUser key={ user.id } { ...user } />
                ))    
            }
        </>
    )
}
