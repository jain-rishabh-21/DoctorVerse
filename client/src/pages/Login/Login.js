import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail, MdPassword } from 'react-icons/md'
import { AiFillEyeInvisible, AiFillEye, AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'

export default function Login() {
  const [details, setDetails] = React.useState({ email: '', password: '' })
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = details
    const user = { email, password }
    try {
      const response = await fetch('http://localhost:4000/userLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const json = await response.json()
      if (json.token) {
        alert('Login Successful')
        localStorage.setItem('token', json.token)
        navigate('/')
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
    if (showPassword) {
      password.type = 'password';
    } else {
      password.type = 'text';
    }
  }

  return (
    <>

      <div className='rectangleRight'></div>

      <div className='rectanglePurpleRight'></div>

      {/* Login Actual Div */}
      <div className='loginDiv'>
        <form className='formDiv'>
          <h3>Doctor Verse</h3>
          <div className='form-element'>
            <div className='flex gap-2 items-center justify-center text-center'>
              <FaUserAlt className='relative items-center text-lg text-cyan-100' />
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
                style={{ color: '#F2F2F2' }}
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
          {/* Form Buttons */}
          <div className='flex justify-around pb-3 items-center gap-6'>
            <div className='signUp'><button onClick={handleLogin} className=''>Sign Up</button></div>
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
              style={{ color: '#F2F2F2', fontSize: '18px', marginTop: '10px', marginBottom: '10px' }}>
              Don't have an account? <Link to='/register' className='text-white hover:text-cyan-200 transition-all duration-150 ease-in-out font-semibold'>Sign Up</Link>
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