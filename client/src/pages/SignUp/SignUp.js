import React, { useState } from 'react'
import './signUp.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail, MdPassword } from 'react-icons/md'
import { AiFillEyeInvisible, AiFillEye, AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'
import ReCAPTCHA from "react-google-recaptcha"

export default function SignUp() {
  const [details, setDetails] = React.useState({ name: '', email: '', password: '', confirmPassword: '', Token: '' })
  const navigate = useNavigate()
  const handleSignUp = async (e) => {
    e.preventDefault()
    const { name, email, password, Token } = details
    const user = { name, email, password, Token }
    try {
      if (password !== details.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      const response = await fetch('http://localhost:4000/userSignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const json = await response.json()
      if (json.name !== undefined) {
        alert('Sign Up Successful')
        navigate('/login')
      }
      else {
        alert('Invalid Credentials')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const showHidePassword = () => {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    if (showPassword) {
      password.type = 'password';
      confirmPassword.type = 'password';
    } else {
      password.type = 'text';
      confirmPassword.type = 'text';
    }
  }

  const reRef = React.createRef(null);

  return (
    <>
      <div className='rectangleRight'></div>

      <div className='rectanglePurpleRight'></div>

      {/* Login Actual Div */}
      <div className='loginDiv'>

        <form className='formDiv'>
          <h3>Doctor Verse</h3>
          {/* username */}
          <div className='form-element'>
            <div className='flex gap-2 items-center justify-center text-center'>
              <FaUserAlt className='relative items-center text-lg text-cyan-100' />
              <label className='text-[1.2rem] text-cyan-100 text-center'>Username</label>
            </div>
            <input
              name='email'
              className='bg-transparent outline-none text-center text-white w-[200px] border-b-2 border-solid'
              type='text'
              autoComplete='off'
              onChange={
                e => setDetails({ ...details, name: e.target.value })
              }
              value={details.name}
              required
              style={{ color: '#F2F2F2' }} />
          </div>
          {/* email */}
          <div className='form-element'>
            <div className='flex gap-2 items-center justify-center text-center'>
              <MdEmail className='relative items-center text-lg text-cyan-100' />
              <label className='text-[1.2rem] text-cyan-100 text-center'>E-mail</label>
            </div>
            <input
              name='email'
              className='bg-transparent outline-none text-center text-white w-[200px] border-b-2 border-solid'
              type='text'
              autoComplete='off'
              onChange={
                e => setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              required
              style={{ color: '#F2F2F2' }} />
          </div>
          {/* password */}
          <div className='form-element'>
            <div className='flex gap-2 items-center justify-center text-center'>
              <MdPassword className='relative items-center text-lg text-cyan-100' />
              <label className='text-[1.2rem] text-cyan-100 text-center'>Password</label>
            </div>
            <div className='relative items-center'>
              <input
                name='password'
                className='bg-transparent outline-none text-center text-white w-[200px] border-b-2 border-solid'
                id='password'
                autoComplete='off'
                onChange={
                  e => setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
                required
              />
            </div>
          </div>
          {/* confirm password */}
          <div className='form-element'>
            <div className='flex gap-2 items-center justify-center text-center'>
              <MdPassword className='relative items-center text-lg text-cyan-100' />
              <label className='text-[1.2rem] text-cyan-100 text-center'>Password</label>
            </div>
            <div className='relative items-center'>
              <input
                name='password'
                id='confirmPassword'
                className='bg-transparent outline-none text-center text-white w-[200px] border-b-2 border-solid'
                autoComplete='off'
                onChange={
                  e => setDetails({ ...details, confirmPassword: e.target.value })
                }
                value={details.confirmPassword}
                required
              />
              {
                showPassword ? (
                  <AiFillEyeInvisible className='relative bottom-6 left-[185px] items-center text-lg text-cyan-100' onClick={() => {
                    togglePassword();
                    showHidePassword();
                  }} />
                ) : (
                  <AiFillEye className='relative bottom-6 left-[185px] items-center text-lg text-cyan-100' onClick={() => {
                    togglePassword();
                    showHidePassword();
                  }} />
                )
              }
            </div>
          </div>
          <ReCAPTCHA
            onChange={(token) => setDetails({ ...details, Token: token })}
            sitekey="Your client site key"
          />
          <br />

          {/* Form Buttons */}
          <div className='flex justify-around pb-3 items-center gap-6'>
            <div className='signUp'><button onClick={handleSignUp} className=''>Sign Up</button></div>
            <div className='line'></div>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <div className='text-xl text-cyan-200'>signup with</div>
              <div className='flex justify-center items-center gap-2'>
                <AiFillGoogleCircle className='text-5xl hover:text-slate-500 text-cyan-300 hover:scale-125 transition-all ease-in-out duration-150 cursor-pointer' />
                <div className='dot'></div>
                <AiFillFacebook className='text-5xl hover:text-[#0165E1] text-cyan-300 hover:scale-125 transition-all ease-in-out duration-150 cursor-pointer' />
              </div>
            </div>
          </div>
          <div className='signUp'>
            <p
              style={{ color: '#f2f2f2', fontSize: '18px', marginTop: '10px', marginBottom: '10px' }} >
              Already have an account? <Link to='/login' style={{ color: '#ffffff', textDecoration: 'none' }}>Log In</Link>
            </p>
          </div>



        </form>
      </div>

      {/* Styling rectangles */}
      {/*  */}
      <div className='rectangleLeft'></div>
      <div className='rectanglePurpleLeft'></div>
    </>
  )
}
