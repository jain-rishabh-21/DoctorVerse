import React from 'react'
import './login.css'

export default function Login() {
  return (
    <>
    
    <div className='rectangleRight'></div>

    <div className='rectanglePurpleRight'></div>

    {/* Login Actual Div */}
    <div className='loginDiv'>
    <form className='formDiv' aria-label='login form'>
      <h3>Doctor Verse</h3>
      <div className='form-element'>
        <label htmlFor='name'>Username</label>
        <input name='name' className='input' type='text' autoComplete='off' id='name' required aria-required="true"></input>
      </div>
      <div className='form-element'>
        <label htmlFor='email'>E-mail Address</label>
        <input name='email' className='input' type='email' autoComplete='off' id='email' required aria-required="true"></input>
      </div>
      <div className='form-element'>
        <label htmlFor='password'>Create Password</label>
        <input name='password' className='input' type='password' autoComplete='off' id='password' required aria-required="true"></input>
      </div>
      <div className='form-element'>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input name='confirm password' className='input' type='password' autoComplete='off' id='confirmPassword' required aria-required="true"></input>
      </div>
      {/* Form Buttons */}
      <div className='FormButtonsDiv'>
        <div className='signUp'><button className='formButton'>Sign Up</button></div>
        <div className='line'></div>
        <div className='signUpWithSocials'>
          <div className='socialSignupHeading'>signup with</div>
          <div className='signUpSocialsContainer'>
          <a href="https://www.freepnglogos.com/pics/google-logo" title="Image from freepnglogos.com">
                <img 
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                 width="50" height="50" alt="google logo icon png transparent background osteopathy" loading='lazy' />
                </a>
                <div className='dot'></div>
                <a href="https://www.freepnglogos.com/pics/logo-facebookpng" title="Image from freepnglogos.com">
                  <img style={{backgroundColor: "white",borderRadius: "50%",border: "1px solid rgb(0,0,0,0)"}} src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-logo-png-transparent-svg-vector-bie-supply-16.png"
                   width="50" height="50" alt="facebook icon png background" loading='lazy' />
                </a>
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
