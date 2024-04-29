
import './Style/SignInCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SignInCard = () => {
    // State för att hantera formulärfält
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Kontrollera att användarnamn och lösenord är korrekta
    function checkCredentials() {
        if (username.length === 0 || password.length === 0) {
            setErrorMessage('Vänligen fyll i Användarnamn och lösenord.');
        } else if (username !== 'user' || password !== 'password') {
            setErrorMessage('Fel användarnamn eller lösenord.');
        } else {
            setErrorMessage('');
        }
    }

    // Validera formuläret
    function validateForm() {
        checkCredentials();
    }

    // Kontrollera om knappen ska vara inaktiverad
    const isSubmitDisabled = username.length === 0 
    || password.length === 0 
    || username !== 'admin' 
    || password !== 'password';

    return (
        <>
        <form>
        <div className="loggin-form">
        <h1>Admin portal</h1>

            { /* input Användarnamn */ }
            <div className="input">
                <input
                    type="text"
                    placeholder="Användarnamn"
                    aria-label="Användarnamn"
                    autoComplete="current-username" 
                    onChange={(event) => setUsername(event.target.value)} />
            </div>

            { /* input Lösenord */ }
            <div className="input">
                <input
                    type="password"
                    placeholder="Lösenord"
                    aria-label="Lösenord"
                    autoComplete="current-password" 
                    onChange={(event) => setPassword(event.target.value)} />
            </div>
            <p className="password-error">{errorMessage} </p>
                
            { /* knapp Logga in */ }
            <div className="submit-container">
                <Link to={isSubmitDisabled ? "#" : "/Edit"}>
                    <button className="submit" onClick={validateForm} >Logga in</button>
                </Link>
            </div>
        </div>

        </form>
        
        </>
    );
}

export default SignInCard;








