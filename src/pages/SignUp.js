import React from 'react';
import SignUpImg from '../assetes/SignUp.png';
import Template from '../components/Template';

export default function SignUp({setIsLoggedIn}) {
  return (
    <div className='flex justify-center items-center'>
    
        <Template
            title="Enjoy the Funny and Amazing Gifs "
            desc1="Welcome to the new home of Gifs... "
            desc2="Creative and Creators are the future."
            img={SignUpImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}
