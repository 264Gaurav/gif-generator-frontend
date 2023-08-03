import React from 'react';
// import Google from '../assetes/GoogleLogo.png';
// import FrameImg from '../assetes/Frame3.png';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'

export default function Template({title,desc1,desc2,img,formtype,setIsLoggedIn}) {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-4 mx-auto gap-x-12 justify-between gap-y-0'>
        <div className='w-11/12 max-w-[450px] '>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] text-slate-100'>
                <span>{desc1}</span> 
                <br />
                <span className='italic text-sm '>{desc2}</span>
            </p>
 
            {
                formtype ==="signup" ? 
                    (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }
            <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-slate-700  '></div>
                <p className='text-slate-500 font-medium leading-[1.375rem]  '>OR</p>
                <div className='h-[1px] w-full bg-slate-700  '></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-slate-100 border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/> 
                <span >Sign up with Google</span>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px] '>
            <img
             className='absolute -top-4 right-4 '
             src={img} alt="Login/Sign-up" height={500} width={490} loading='lazy' />
        </div>
    </div>
  )
}
