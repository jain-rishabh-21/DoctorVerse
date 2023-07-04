import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [details, setDetails] = React.useState({ name: '', email: '', password: '', confirmPassword: '' })
  const navigate = useNavigate()
  const handleSignUp= async (e) => {
    e.preventDefault()
    const {name, email, password } = details
    const user = { name, email, password }
    try {
      if(password !== details.confirmPassword){
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
      else{
        alert('Invalid Credentials')
      }
    } catch (error) {
      console.error('Error:', error)
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
        <label>Username</label>
        <input name='name' className='input' type='text' autoComplete='off' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} style={{color:'white'}} required></input>
      </div>
      <div className='form-element'>
        <label>E-mail Address</label>
        <input name='email' className='input' type='text' autoComplete='off' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} style={{color:'white'}} required></input>
      </div>
      <div className='form-element'>
        <label>Create Password</label>
        <input name='password' className='input' type='text' autoComplete='off' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} style={{color:'white'}} required></input>
      </div>
      <div className='form-element'>
        <label>Confirm Password</label>
        <input name='password' className='input' type='text' autoComplete='off' onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword} style={{color:'white'}} required></input>
      </div>

      {/* Form Buttons */}
      <div className='FormButtonsDiv'>
        <div className='signUp'><button className='formButton' 
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
          borderRadius: '5px',
          width: '100px',
          height: '40px',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }} 
        onClick={handleSignUp}>Sign Up</button></div>
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
      <div className='signUp'>
        <p
        style={{color: 'white', fontSize: '18px', marginTop: '10px', marginBottom: '10px'}} >
          Already have an account? <Link to='/login' style={{color: 'white', textDecoration: 'none'}}>Log In</Link>
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
