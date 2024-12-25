import React, { useState, useContext } from 'react';
import loginImg from "../assets/login.png";
import { FigureContext } from '../context/FigureContext'; // Update with your context
import axios from "axios";
import { toast } from 'react-toastify';

const Login = () => {
  const { setToken, navigate, backendUrl } = useContext(FigureContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For user registration only
  const [isAdmin, setIsAdmin] = useState(false); // Toggle between User and Admin
  const [currState, setCurrState] = useState('Login'); // Toggle between Login and Sign Up

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === 'Sign Up') {
        // User Registration Endpoint
        const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Registration successful! Welcome!');
          navigate('/');
        } else {
          toast.error(response.data.message);
        }
      } else {
        // Login Endpoint
        const endpoint = isAdmin
          ? `${backendUrl}/api/user/admin` // Admin Login API
          : `${backendUrl}/api/user/login`; // User Login API

        const response = await axios.post(endpoint, { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('role', isAdmin ? 'admin' : 'user'); // Save role in localStorage
          toast.success(`Welcome ${isAdmin ? 'Admin' : 'User'}!`);

          if (isAdmin) {
            window.location.href = `http://localhost:5174/dashboard`; // Admin panel port
          } else {
            navigate('/');
          }
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleProceedWithoutSignIn = () => {
    navigate('/'); // Redirect to main page without login
  };

  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      <div className="flex h-full w-full">
        {/* Image side */}
        <div className="w-1/2 hidden sm:block">
          <img src={loginImg} alt="Login" className="object-cover h-full w-full" />
        </div>
        {/* Form side */}
        <div className="flexCenter w-full sm:w-1/2">
          <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800">
            <div className="w-full mb-4">
              <h3 className="bold-36">
                {currState === 'Sign Up'
                  ? 'User Registration'
                  : isAdmin ? 'Admin Login' : 'User Login'}
              </h3>
            </div>
            {currState === 'Sign Up' && (
              <div className="w-full">
                <label htmlFor="name" className="medium-15">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="medium-15">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-15">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <button type="submit" className="btn-dark w-full mt-5 !py-[7px] !rounded">
              {currState === 'Sign Up' ? 'Sign Up' : 'Login'}
            </button>
            <div className="w-full flex flex-col gap-y-3 medium-14">
              {currState === 'Login' ? (
                <div className="underline">
                  Don't have an account?{' '}
                  <span onClick={() => setCurrState('Sign Up')} className="cursor-pointer hover:text-secondaryOne">Create account</span>
                </div>
              ) : (
                <div className="underline">
                  Already have an account?{' '}
                  <span onClick={() => setCurrState('Login')} className="cursor-pointer hover:text-secondaryOne">Login</span>
                </div>
              )}
              <div className="underline">
                <span onClick={handleProceedWithoutSignIn} className="cursor-pointer hover:text-secondaryOne">Proceed without Sign-In</span>
              </div>
            </div>
            <div className="w-full flex justify-center mt-5">
              <button
                type="button"
                onClick={() => setIsAdmin((prev) => !prev)} // Toggle between User and Admin
                className={`btn-outline flexCenter px-4 py-2 rounded ${
                  isAdmin ? 'bg-secondary text-white' : 'bg-white text-secondary'
                }`}
              >
                Switch to {isAdmin ? 'User' : 'Admin'} Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
