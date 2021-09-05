import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x307.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>Email:</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password:</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login__signInButton" >SIGN IN</button>
                </form>

                <p>
                    By signing in, you agree to AmazonClone 
                    condition of Use & Sale. Please see 
                    out Privacy Notice, our Cookies Notice
                    and out Interest-Based Ads Notice
                </p>
                <button onClick={register} className="login__registerButton">Create New Account</button>
            </div>
        </div>
    )
}

export default Login