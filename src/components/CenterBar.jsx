import '../styles/components/CenterBar.css';
import { Nav, CreateTweet, Tweet, SearchInput, SearchedUser, Notification } from './CenterComponents/';

export const CenterBar = () => {
    const pathname = window.location.pathname;
    return (
        <>
            {
                (pathname == '/home') &&
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
                    </>
            }

            {
                (pathname == '/explore') &&
                    <>
                        <SearchInput />
                        <SearchedUser />
                        <SearchedUser />
                        <SearchedUser />
                        <SearchedUser />
                    </>
            }

            {
                (pathname == '/notifications') &&
                    <>
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </>
            }
            
        </>
    )
}
