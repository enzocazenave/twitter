import { useEffect } from 'react';
import '../styles/components/RegisterPage.css';

export const RegisterPage = () => {

    useEffect(() => {
        document.title = 'Register / Twitter';
    }, []);

    return (
        <div className="row registerpage-container">
            <div className="registerpage-container_image">
                <i className="fab fa-twitter"></i>
            </div>

            <div className="registerpage-container_form">
                <i id="form-icon" className="fab fa-twitter"></i>
                <h1 className="registerpage-container_form--title">What is happening now</h1>
                <h2 className="registerpage-container_form--title2">Join Twitter today</h2>

                <form className="registerpage-container_realform">
                    <input className="registerpage-container_form--inputs" type="text" placeholder="Name" />
                    <label className="registerpage-container_realform--label">Date of birth</label>
                    <input className="registerpage-container_form--inputs" type="date" placeholder="Date of birth" />
                    <input className="registerpage-container_form--inputs" type="email" placeholder="Email" />
                    <input className="registerpage-container_form--inputs" type="text" placeholder="Username"/>
                    <input className="registerpage-container_form--inputs" type="password" placeholder="Password"/>
                    <input className="registerpage-container_form--inputs" type="password" placeholder="Repeat Password"/>
                    <div className="register-buttons">
                        <button className="register-button">Register</button>
                        <button className="go-login">I've an account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
