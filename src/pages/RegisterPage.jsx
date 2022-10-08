import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../components';
import { AuthContext } from '../context/AuthContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useForm } from '../hooks/useForm';
import '../styles/components/RegisterPage.css';

const initialForm = { name: '', username: '', email: '', password: '', password_repeated: '', birthdate: '' }

export const RegisterPage = () => {

    const navigate = useNavigate();
    const { name, username, email, password, password_repeated, birthdate, onInputChange } = useForm(initialForm); 
    const { startRegister } = useAuthContext();
    const { ERROR } = useContext(AuthContext);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'Register / Twitter';
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (name.length == 0) return;
        if (username.length == 0) return ;
        if (password != password_repeated) return setError('Passwords must be the same');
        if (password.length < 6) return setError('Passwords must be 6 characters or more');

        startRegister({
            name,
            username,
            password,
            email,
            birthdate: birthdate.split("-").reverse().join("/")
        })
    }

    return (
        <div className="row registerpage-container fadeIn">
            <div className="registerpage-container_image">
                <i className="fab fa-twitter"></i>
            </div>

            <div className="registerpage-container_form">
                <i id="form-icon" className="fab fa-twitter"></i>
                <h1 className="registerpage-container_form--title">What is happening now</h1>
                <h2 className="registerpage-container_form--title2">Join Twitter today</h2>

                <form className="registerpage-container_realform" onSubmit={ onSubmit }>
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="text" 
                        placeholder="Name"
                        name="name"
                        value={ name }
                        onChange={ onInputChange }
                        required
                    />
                    <label className="registerpage-container_realform--label">Date of birth</label>
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="date" 
                        placeholder="Date of birth" 
                        name="birthdate"
                        value={ birthdate }
                        onChange={ onInputChange }
                        required
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={ email }
                        onChange={ onInputChange }
                        required
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        value={ username }
                        onChange={ onInputChange }
                        required
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={ password }
                        onChange={ onInputChange }
                        required
                    />
                    <input 
                        className="registerpage-container_form--inputs" 
                        type="password" 
                        placeholder="Repeat Password"
                        name="password_repeated"
                        value={ password_repeated }
                        onChange={ onInputChange }
                        required
                    />
                    {
                        (ERROR.length > 0 || error.length > 0) && <Alert msg={ (ERROR.length > 0) ? ERROR : error } />
                    }
                    <div className="register-buttons">
                        <button className="register-button" type="submit" >Register</button>
                        <button onClick={ () => navigate('/login') } className="go-login">I've an account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
