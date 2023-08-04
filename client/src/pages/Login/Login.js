import React, { useState } from 'react'
import './login.css'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail, MdPassword } from 'react-icons/md'
import { AiFillEyeInvisible, AiFillEye, AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'


export default function Login() {

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

  return (
    <>

      <div className='rectangleRight'></div>

      <div className='rectanglePurpleRight'></div>

      {/* Login Actual Div */}
      <div className='loginDiv'>
        <form className='formDiv' aria-label='login form'>
          <h3>Doctor Verse</h3>
          <div className='form-element'>
            <div className='flex gap-2 items-center justify-center text-center'>
              <FaUserAlt className='relative items-center text-lg text-cyan-100' />
              <label htmlFor='name' className='text-[1.2rem] text-cyan-100 text-center'>Username</label>
            </div>
            <input name='name' className='bg-transparent outline-none text-center text-white w-[200px] border-b-2 border-solid' type='text' autoComplete='off' id='name' required aria-required="true"></input>
          </div>

          <div className='form-element'>
            <div className='flex gap-2 items-center justify-center text-center'>
              <MdEmail className='relative items-center text-lg text-cyan-100' />
              <label htmlFor='email' className='text-[1.2rem] text-cyan-100 text-center'>E-mail Address</label>
            </div>
            <input name='email' className='bg-transparent outline-none text-center text-white w-[200px] border-b-2 border-solid' type='email' autoComplete='off' id='email' required aria-required="true"></input>
          </div>

          <div className='form-element'>
            <div className='flex gap-2 items-center justify-center text-center'>
              <MdPassword className='relative items-center text-lg text-cyan-100' />
              <label htmlFor='password' className='text-[1.2rem] text-cyan-100 text-center'>Create Password</label>
            </div>
            <input name='password' className='bg-transparent outline-none text-center text-white w-[200px] border-b-2 border-solid' type='password' autoComplete='off' id='password' required aria-required="true"></input>
          </div>

          <div className='form-element'>
            <div className='flex gap-2 justify-center items-baseline'>
              <MdPassword className='relative items-center text-lg text-cyan-100' />
              <label htmlFor='confirmPassword' className='text-[1.2rem] text-cyan-100 text-center'>Confirm Password</label>
            </div>
            <div className='relative items-center'>
              <input name='confirm password' className='bg-transparent outline-none text-center text-white w-[200px] border-b-2 border-solid' type='password' autoComplete='off' id='confirmPassword' required aria-required="true"></input>
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

          {/* Form Buttons */}
          <div className='flex justify-around pb-3 items-center gap-6'>
            <div className='signUp'><button className=''>Sign Up</button></div>
            <div className='line'></div>
            <div className='signUpWithSocials'>
              <div className='socialSignupHeading'>signup with</div>
              <div className='signUpSocialsContainer'>
                <AiFillGoogleCircle className='text-5xl hover:text-slate-500 text-cyan-300 hover:scale-125 transition-all ease-in-out duration-150 cursor-pointer' />
                <div className='dot'></div>
                <AiFillFacebook className='text-5xl hover:text-[#0165E1] text-cyan-300 hover:scale-125 transition-all ease-in-out duration-150 cursor-pointer' />
              </div>
            </div>
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
