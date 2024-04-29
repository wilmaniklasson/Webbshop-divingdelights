
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
            setErrorMessage('Användarnamn och lösenordsfältet kan inte vara tomma.');
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
        <div className="loggin-form">
        <h1>Admin portal</h1>

            { /* input Användarnamn */ }
            <div className="input">
                <input
                    type="text"
                    placeholder="Användarnamn"
                    aria-label="Användarnamn"
                    onChange={(event) => setUsername(event.target.value)} />
            </div>

            { /* input Lösenord */ }
            <div className="input">
                <input
                    type="password"
                    placeholder="Lösenord"
                    aria-label="Lösenord"
                    onChange={(event) => setPassword(event.target.value)} />
                <p className="password-error">{errorMessage}</p>
            </div>
                
            { /* knapp Logga in */ }
            <div className="submit-container">
                <Link to={isSubmitDisabled ? "#" : "/Edit"}>
                    <button className="submit" onClick={validateForm} disabled={isSubmitDisabled}>Logga in</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default SignInCard;








