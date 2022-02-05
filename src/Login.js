import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-wrapper'>
            <img
                className='nav-logo-login' 
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' 
                alt='Netflix Logo'
            />
            <h2 className='login-title'>Who's watching?</h2>
            <div className='login-profile-wrapper'>
                <Link />
                <div className='login-user-wrapper'>
                    <Link to={'/home'}>
                        <img className='login-avatar' src='/netflix-smiley.png' alt='avatar'/>
                    </Link>
                    <p className='login-user-label'>User</p>
                </div>
                <div className='login-add-wrapper'>
                    <div className='login-add-avatar-box'>
                        <img className='login-add-avatar' src='/icons8-plus-+-100.png' alt='add'/>
                    </div>
                    <p className='login-add-label'>Add Profile</p>
                </div>
            </div> 
        </div>
    )
}

export default Login
