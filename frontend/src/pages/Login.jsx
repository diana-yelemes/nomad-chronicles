import React, { useState } from 'react'
import loginImg from '../assets/login.png';


const Login = () => {
   const [currState, setCurrState]= useState('Sign Up');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

  return (
    <section className='absolute top-0 left-0 h-full w-full z-50
    bg-white'>
        {/* Container */}
        <div className='flex h-full w-full'>
            {/* Image side */}
            <div className='w-1/2 hidden sm:block'>
                <img src={loginImg} alt='' className='object-cover
                aspect-square h-full w-full'/>
            </div>
            {/* Form side */}
            <div className='flexCenter w-full sm:w-1/2'>
                <form className='flex flex-col items-center w-[90%]
                sm:max-w-md m-auto gap-y-5 text-gray-800'>
                    <div className='w-full mb-4'> 
                         <h3 className='bold-36'>{currState}</h3>
                           </div>
                    {currState === 'Sign Up' && (
                    <div className='w-full'>
                        <label htmlFor='name' className='medium-14'>
                            Name
                        </label>
                        <input type='text' placeholder='Name' id='name' 
                        value={name} onChange={(e)=> setName(e.target.value)}
                        className='w-full px-3 py-1 ring-1 ring-slate-900/10 
                        rounded bg-primary mt-1'/>
                        </div>
                )}
                <div className='w-full'>
                    <label htmlFor='email' className='medium-14'>
                        Email
                    </label>
                    <input type='email' placeholder='Email' id='email' 
                    value={email} onChange={(e)=> setEmail(e.target.value)}
                    className='w-full px-3 py-1 ring-1 ring-slate-900/10 
                    rounded bg-primary mt-1'/>
                </div>
                <div className='w-full'>
                    <label htmlFor='password' className='medium-14'>
                        Password
                    </label>
                    <input type='password' placeholder='Password' id='password' 
                    value={password} onChange={(e)=> setPassword(e.target.value)}
                    className='w-full px-3 py-1 ring-1 ring-slate-900/10 
                    rounded bg-primary mt-1'/>
                </div>
                <button type='submit' className='btn-dark w-full mt-5
                !py-[7px] !rounded'>{currState === "Sign Up" 
                ? "Sign Up" : "Login"}</button>
                <div className='w-full flex flex-col gap-y-3 medium-14'>
                    <div className='underline'>Forgot your password?</div>
                    {currState === "Login" ? (
                        <div className='underline'>Don't have an account? <span
                        className='cursor-pointer hover:text-secondaryOne' onClick={()=> setCurrState('Sign Up')}> 
                        Create account</span></div>
                    ) : (
                        <div onClick={()=> setCurrState('Login')} className='underline
                        cursor-pointer hover:text-secondaryOne'>Already have an account? <span> Login</span></div>
                    )}
                </div>
                </form>
                </div>
            </div>
        </section>
    )
    }

export default Login