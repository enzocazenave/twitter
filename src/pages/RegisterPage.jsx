import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import '../styles/components/RegisterPage.css';

const initialForm = { name: '', username: '', email: '', password: '', password_repeated: '', birthdate: '' }

export const RegisterPage = () => {

    const navigate = useNavigate();
    const { name, username, email, password, password_repeated, birthdate, onInputChange } = useForm(initialForm); 

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
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="text" 
                        placeholder="Name"
                        name="name"
                        value={ name }
                        onChange={ onInputChange }
                    />
                    <label className="registerpage-container_realform--label">Date of birth</label>
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="date" 
                        placeholder="Date of birth" 
                        name="birthdate"
                        value={ birthdate }
                        onChange={ onInputChange }
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={ email }
                        onChange={ onInputChange }
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        value={ username }
                        onChange={ onInputChange }
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={ password }
                        onChange={ onInputChange }
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="password" 
                        placeholder="Repeat Password"
                        name="password_repeated"
                        value={ password_repeated }
                        onChange={ onInputChange }
                    />
                    <div className="register-buttons">
                        <button className="register-button">Register</button>
                        <button onClick={ () => navigate('/login') } className="go-login">I've an account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
