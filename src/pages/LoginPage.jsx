import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const initialForm = { email : '', password: '' }

export const LoginPage = () => {
    
    const { email, password, onInputChange } = useForm(initialForm);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Login / Twitter';
    }, []);

    return (
        <div className="row registerpage-container">
            <div className="registerpage-container_image">
                <i className="fab fa-twitter"></i>
            </div>

            <div className="registerpage-container_form">
                <i id="form-icon" className="fab fa-twitter"></i>
                <h1 className="registerpage-container_form--title">What is happening now</h1>
                <h2 className="registerpage-container_form--title2">Discover the new trends</h2>

                <form className="registerpage-container_realform">
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        onChange={ onInputChange }
                        value={ email }
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        onChange={ onInputChange }
                        value={ password }
                    />
                    <div className="register-buttons">
                        <button className="register-button">Login</button>
                        <button onClick={ () => navigate('/register') } className="go-login">I don't have an account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
