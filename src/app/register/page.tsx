// pages/register/page.tsx
"use client";
import { useState } from 'react';
import type { NextPage } from 'next';
import userRegister from '@/libs/userRegister';

const Register: NextPage = () => {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your registration logic here
  };

  const handleRegister = async()=>{
    const response = await userRegister(name,telephone,email,password,'user')
    setName('')
    setTelephone('')
    setEmail('')
    setConfirmEmail('')
    setPassword('')
    setConfirmPassword('')
    alert('Register Successfully')
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-300">

      <p className='text-4xl mb-16 ml-7 text-left font-bold'>Register</p>

        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="name" className="block leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-1 text-base inline-block border p-2 text-left border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
              hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 text-stone-800 transform 
              hover:-translate-x-1 hover:-translate-y-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="telephone" className="block leading-7 text-sm text-gray-600">
              Telephone
            </label>
            <input
              id="telephone"
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full px-3 py-1 text-base inline-block border p-2 text-left border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
              hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 text-stone-800 transform 
              hover:-translate-x-1 hover:-translate-y-1"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-1 text-base inline-block border p-2 text-left border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
            hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 text-stone-800 transform 
            hover:-translate-x-1 hover:-translate-y-1"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmEmail" className="block leading-7 text-sm text-gray-600">
            Confirm Email
          </label>
          <input
            id="confirmEmail"
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            className="w-full px-3 py-1 text-base inline-block border p-2 text-left border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
            hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 text-stone-800 transform 
            hover:-translate-x-1 hover:-translate-y-1"
            required
          />
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="password" className="block leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1 text-base inline-block border p-2 text-left border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
              hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 text-stone-800 transform 
              hover:-translate-x-1 hover:-translate-y-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="confirmPassword" className="block leading-7 text-sm text-gray-600">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-1 text-base inline-block border p-2 text-left border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
              hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 text-stone-800 transform 
              hover:-translate-x-1 hover:-translate-y-1"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-2 mt-4 inline-block border p-2 text-center border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
          hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
          hover:-translate-x-1 hover:-translate-y-1" onClick={handleRegister}>
          Register
        </button>
        {error && (
          <p className="mt-3 text-xs text-center text-red-500">{error}</p>
        )}
      
    </div>
  );
};

export default Register;
