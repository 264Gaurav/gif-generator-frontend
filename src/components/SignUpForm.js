import React, { useState } from 'react';
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignUpForm=({setIsLoggedIn}) =>{
    const navigate=useNavigate();

    const[user,setuser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
    })

    const[showPass,setShowPass] = useState(false);
    const[showPassword,setShowPassword] = useState(false);
    

    const changeHandler=(event)=>{
        const {name,value}=event.target;
        console.log(event.target);
        setuser( { 
            ...user , 
            [name] : value 
         } ) 
     }


     const submitHandler= async (event)=>{
        event.preventDefault();
        //destructuring datas 
        const {firstname,email,password,confirmpassword }=user;
     
        //validation
        if(firstname && email && password && password && confirmpassword ){
            if(password===confirmpassword){
              axios.post( `${process.env.REACT_APP_BASE_URL}/signup` , user)
            .then((res)=>{
              console.log(res);
              navigate('/login');
              toast.success(res.data.message);
            })
            .catch((err)=>{
              console.log(err)
              toast.error("Can't register")
            })
            
            }
            else{
              toast.error("Password and confirm password are not same.")
            }
          }
          else{
            toast("invalid Input, fill all fields.");
          }
        
     }

  return (
    <div className='text-slate-50 mt-4'>
        {console.log(user)}
        <form onSubmit={submitHandler}>
            {/* firstname and last name */}
            <div className='flex gap-x-4 mt-4'>
                <label className='w-full'>
                    <p className='text-[0.075rem text-slate-100 mb-1 leading-[1.375rem]'>First Name
                          <sup className='text-pink-200'>*</sup> 
                    </p>
                    <input
                        className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[8px] '
                        type="text" 
                        required
                        name='firstname'
                        onChange={changeHandler}
                        placeholder='Enter First name'
                        value={user.firstname}
                    />
                </label>
                <label className='w-full'>
                    <p className='text-[0.075rem text-slate-100 mb-1 leading-[1.375rem] '>Last Name
                       
                    </p>
                    <input 
                        className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[8px] '
                        type="text" 
            
                        name='lastname'
                        onChange={changeHandler}
                        placeholder='Enter Lirst name'
                        value={user.lastname}
                    />
                </label>
            </div>

            {/* email id */}
            <div className='mt-4'>
                <label className='w-full'>
                    <p className='text-[0.075rem text-slate-100 mb-1 leading-[1.375rem] '>Email Address
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[8px] '
                        type="email" 
                        required
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email-id'
                        value={user.email}
                    />
                </label>
            </div>

            {/* create password and confirm password */}
            <div className='flex gap-x-4 mt-4'>
                <label className='w-full relative'>
                    <p className='text-[0.075rem text-slate-100 mb-1 leading-[1.375rem] '>Create Password
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[8px] '
                        type={showPass ? ("text"):("password")} 
                        required
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter password'
                        value={user.password}
                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer ' 
                    onClick={()=>setShowPass((previous)=> !previous)}>
                        { showPass ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />): (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)  }
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.075rem text-slate-100 mb-1 leading-[1.375rem] '>Confirm Password
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[8px] '
                        type={showPassword ? ("text"):("password")}  
                        required
                        name='confirmpassword'
                        onChange={changeHandler}
                        placeholder='Confirm password'
                        value={user.confirmpassword}
                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer ' 
                     onClick={()=>setShowPassword((previous)=> !previous)}>
                        { showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)  }
                    </span>
                </label>
            </div>
             
             <button className='bg-yellow-500 w-full mt-6 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px]'>Create Account</button>
        </form>

    </div>
  )
}

export default SignUpForm;
