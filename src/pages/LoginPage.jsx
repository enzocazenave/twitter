import { useEffect } from "react";

export const LoginPage = () => {

    useEffect(() => {
        document.title = 'Login / Twitter';
    }, []);

    return (
        <div>LoginPage</div>
    )
}
