import React from 'react';
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function LoginForm({setIsLoggedIn}) {
    const navigate=useNavigate();

    const[user,setuser]=useState({
        email:'',password:''
    })

    const[showPass,setShowPass] = useState(false);

    function changeHandler(event){
       setuser((prev)=>(
        {...prev , [event.target.name]:event.target.value}
        ) )
    }

    function submitHandler(event){
        event.preventDefault();
        const {email,password}=user;
        //validation
        if(email && password){
          axios.post(`${process.env.REACT_APP_BASE_URL}/login` , user)
          .then( (res)=>{
            console.log(res);
            toast.success(res.data.message);
            setIsLoggedIn(true);
            console.log('Login form submitted');
            setIsLoggedIn(true);  //login hone par 
            navigate("/");
          })
          
          .catch((err)=>{
            console.log(err.response.data.message);
            toast.error(err.response.data.message)
            navigate("/login")
          });
                        
        }
        else{
          toast.error("Fill all fields")
        }
    
    }

  return (
    <form onSubmit={submitHandler} 
      className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.075rem text-slate-100 mb-1 leading-[1.375rem] '
            >Email Address <sup className='text-pink-200'>*</sup></p>
            <input 
              className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[8px] '
              required
              type="email" 
              value={user.email}
              onChange={changeHandler}
              name="email"
              placeholder='Enter email Address'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.075rem text-slate-100 mb-1 leading-[1.375rem] '
            >Password <sup className='text-pink-200'>*</sup></p>
            <input 
              className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[8px] '
              required
              type= {showPass? ("text"):("password")}
              value={user.password}
              onChange={changeHandler}
              name="password"
              placeholder="Enter Your Password"
            />
            <span  className='absolute right-3 top-[38px] cursor-pointer ' 
             onClick={()=>setShowPass((previous)=> !previous)} >
                { showPass ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) 
                    : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)  }
            </span>

            <Link to="/signup">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
            </Link>

            <button className='bg-yellow-500 w-full mt-6 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px]'>
                Sign In
            </button>
        </label>
    </form>
  )
}
