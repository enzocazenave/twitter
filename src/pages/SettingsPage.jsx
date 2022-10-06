import { useEffect } from 'react';
import { AccountInformation } from '../components/CenterComponents/';

export const SettingsPage = () => {

    useEffect(() => {
        document.title = 'Your Account / Twitter';
    }, []);

    return (
        <>
            <AccountInformation />  
        </>
    )
}
