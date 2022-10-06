import { useEffect } from "react";
import { Notification } from "../components/CenterComponents"

export const NotificationsPage = () => {

    useEffect(() => {
        document.title = 'Notifications / Twitter';
    }, []);

    return (
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
    )
}
