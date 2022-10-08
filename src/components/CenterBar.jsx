import { HomePage, ExplorePage, NotificationsPage, ProfilePage, SettingsPage, ProfilesPage } from '../pages';
import { TweetModal, EditProfileModal } from './Modals/';
import '../styles/components/CenterBar.css';

export const CenterBar = () => {
    const pathname = window.location.pathname.split('/')[1];
    return (
        <>
            { (pathname == 'home') && <HomePage /> }
            { (pathname == 'explore') && <ExplorePage /> }
            { (pathname == 'notifications') && <NotificationsPage /> }
            { (pathname == 'profile') && <ProfilePage /> }
            { (pathname == 'settings') && <SettingsPage /> }
            { (pathname == 'profiles') && <ProfilesPage />}

            <TweetModal />
            <EditProfileModal />
        </>
    )
}

