import '../styles/login.css'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate();
    function onLoginClick(){
        signInWithPopup(auth, provider)
        .then((result) =>{
            console.log("result", result);
            navigate('/home');
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    return (
        <div className="main">
            <div>
                <h1 className='welcome'>WELCOME TO REDBUS</h1>
                <div className='login'>
                    <button onClick={onLoginClick} className='login-btn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login