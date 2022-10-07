import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../components/';
import { AuthContext } from '../context/AuthContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useForm } from '../hooks/useForm';

const initialForm = { email : '', password: '' }

export const LoginPage = () => {
    
    const { email, password, onInputChange } = useForm(initialForm);
    const navigate = useNavigate();
    const { startLogin } = useAuthContext();
    const { ERROR } = useContext(AuthContext);

    useEffect(() => {
        document.title = 'Login / Twitter';
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) return;
        startLogin({ email, password });
    }

    return (
        <div className="row registerpage-container">
            <div className="registerpage-container_image">
                <i className="fab fa-twitter"></i>
            </div>

            <div className="registerpage-container_form">
                <i id="form-icon" className="fab fa-twitter"></i>
                <h1 className="registerpage-container_form--title">What is happening now</h1>
                <h2 className="registerpage-container_form--title2">Discover the new trends</h2>

                <form className="registerpage-container_realform" onSubmit={ onSubmit }>
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
                    {
                        (ERROR.length > 0) && <Alert msg={ ERROR } />
                    }
                    <div className="register-buttons">
                        <button type="submit" className="register-button">Login</button>
                        <button onClick={ () => navigate('/register') } className="go-login">I don't have an account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
