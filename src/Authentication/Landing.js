import React from 'react';
import { Signup } from './Signup';
import { Login } from './Login';
import  './Landing.css';


export const Landing = () => {
    return (
        <div className="landing_div">
            <Signup />
            <Login /> 
        </div>
    )
}
