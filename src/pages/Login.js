import React from 'react';
import LoginImg from '../assetes/Login.png';
import Template from '../components/Template';


export default function Login({setIsLoggedIn}) {
  return (
    <div className='flex justify-center items-center'>
        <Template
            title="Welcome Back"
            desc1="Welcome to the new home of Gifs... "
            desc2="Creative and Creators are the future."
            img={LoginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}
