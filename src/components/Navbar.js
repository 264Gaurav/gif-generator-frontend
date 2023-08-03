import React from 'react';
import Logo from '../assetes/G_logo.png';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';



export default function Navbar(props) {

    const isLoggedIn=props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/" ><img className='h-12 w-12 rounded-full mx-1' src={Logo} alt="G-logo" /></Link>
        <nav>
           <ul className='flex gap-x-6 text-white  '>
                <li>
                    { isLoggedIn &&
                        <Link  to="/">
                            <button className='bg-slate-800 text-slate-100 px-[8px] rounded border-white  ' onClick={()=>{
                                setIsLoggedIn(true)
                                }}>Home</button>
                        </Link>
                    }
                </li>

                <li>
                    { isLoggedIn &&
                        <Link  to="/contactUs">
                            <button className='bg-slate-800 text-slate-100 px-[8px] rounded border-white  ' onClick={()=>{
                                setIsLoggedIn(true)
                                }}>Contact us</button>
                        </Link>
                    }
                </li>
                <li>
                   { isLoggedIn &&
                        <Link  to="/about">
                            <button className='bg-slate-800 text-slate-100 px-[8px] rounded border-white  ' onClick={()=>{
                                setIsLoggedIn(true)
                                }}>About</button>
                        </Link>
                    }
                </li>
           </ul>
        </nav>

        <div className='flex items-center gap-x-4 '>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-slate-800 text-slate-100 px-[8px] rounded border-white  '>Login</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-slate-800 text-slate-100 px-[8px] rounded border-white  ' >Sign Up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-slate-800 text-slate-100 px-[8px] rounded border-white  ' onClick={()=>{
                        toast.success('Your account has been logged out.');
                        setIsLoggedIn(false);
                        }} >Logout</button>
                </Link>
            }
            { isLoggedIn &&
                <Link  to="/dashboard">
                    <button className='bg-slate-800 text-slate-100 px-[8px] rounded border-white  ' onClick={()=>{
                        setIsLoggedIn(true)
                        }}>Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}
