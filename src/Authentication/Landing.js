import React, {useState } from 'react';
import { Signup } from './Signup';
import { Login } from './Login';
import  './Landing.css';
import { ForgotPassword } from './ForgotPassword';


export const Landing = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const clickHandler= () => {
        setIsForgotPassword(false);
        setIsSignup(!isSignup);
        
    };
    const clickForgotHandler= () => {
        
        setIsForgotPassword(true);
        setIsSignup(true);
    };
    let button;
    if(isSignup && !isForgotPassword) button= <Signup click={clickHandler}/> 
    else if(!isForgotPassword) button= <Login click={clickHandler} clickForgot={clickForgotHandler} /> 
    else button= <ForgotPassword click={clickHandler}/>
    return (
        <div className="landing_div">
            {button}
        </div>
    )
}
