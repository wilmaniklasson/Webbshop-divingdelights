import './Style/SignIn.css';
import logga from '../assets/logga.svg';
import SignInCard from '../components/SignInCard.jsx';

const SignIn = () => {
   
    return (
        <>
        <header className='header-loggin'>
        <img className="logga" src={logga} alt="logga" />
        </header>
        <SignInCard />
        </> 
    );
}

export default SignIn;
