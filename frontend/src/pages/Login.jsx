import React, { useState, useContext } from 'react';
import loginImg from "../assets/login.png";
import { FigureContext } from '../context/FigureContext';
import axios from "axios";
import { toast } from 'react-toastify';

const Login = () => {
  const { setToken, navigate, backendUrl } = useContext(FigureContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [currState, setCurrState] = useState('Login');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currState === 'Sign Up') {
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
          toast.error("All fields are required for registration");
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          toast.error("Please enter a valid email");
          return;
        }

        if (password.length < 6) {
          toast.error("Password must be at least 6 characters long");
          return;
        }

        if (password !== confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }

        const response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        if (response.data.success && response.data.token) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Registration successful! Welcome!');
          navigate('/');
        } else {
          toast.error(response.data.message || 'Registration failed.');
        }
      } else {
        if (!email || !password) {
          toast.error("Please enter email and password");
          return;
        }

        const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });

        if (response.data.success && response.data.token) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Login successful!');
          navigate('/');
        } else {
          toast.error(response.data.message || 'Login failed.');
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      <div className="flex h-full w-full">
        <div className="w-1/2 hidden sm:block">
          <img src={loginImg} alt="Login" className="object-cover h-full w-full" />
        </div>

        <div className="flexCenter w-full sm:w-1/2">
          <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800">
            <div className="w-full mb-4">
              <h3 className="bold-36">{currState === 'Sign Up' ? 'User Registration' : 'User Login'}</h3>
            </div>

            {currState === 'Sign Up' && (
              <>
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
              </>
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

            {currState === 'Sign Up' && (
              <div className="w-full">
                <label htmlFor="confirmPassword" className="medium-15">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                />
              </div>
            )}

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
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
