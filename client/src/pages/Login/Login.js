import React from 'react'
import './login.css'

export default function Login() {
  return (
    <>
    
    <div className='rectangleRight'></div>

    <div className='rectanglePurpleRight'></div>

    {/* Login Actual Div */}
    <div className='loginDiv'>
    <form className='formDiv'>
      <h3>Doctor Verse</h3>
      <div className='form-element'>
        <label>Username</label>
        <input name='name' className='input' type='text' autoComplete='off'></input>
      </div>
      <div className='form-element'>
        <label>E-mail Address</label>
        <input name='email' className='input' type='text' autoComplete='off'></input>
      </div>
      <div className='form-element'>
        <label>Create Password</label>
        <input name='password' className='input' type='text' autoComplete='off'></input>
      </div>
      <div className='form-element'>
        <label>Confirm Password</label>
        <input name='confirm password' className='input' type='text' autoComplete='off'></input>
      </div>
      {/* Form Buttons */}
      <div className='FormButtonsDiv'>
        <div className='signUp'><button className='formButton'>Sign Up</button></div>
        <div className='line'></div>
        <div className='signUpWithSocials'>
              <a href="https://www.freepnglogos.com/pics/google-logo" title="Image from freepnglogos.com">
                <img 
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                 width="50" alt="google logo icon png transparent background osteopathy" />
                </a>
                <div className='dot'></div>
                <a href="https://www.freepnglogos.com/pics/logo-facebookpng" title="Image from freepnglogos.com">
                  <img style={{backgroundColor: "white",borderRadius: "50%",border: "1px solid rgb(0,0,0,0)"}} src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-logo-png-transparent-svg-vector-bie-supply-16.png"
                   width="50" alt="facebook icon png background" />
                </a>
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
