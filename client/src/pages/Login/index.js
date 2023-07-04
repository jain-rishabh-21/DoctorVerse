import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [details, setDetails] = React.useState({email: '', password: '' })
  const navigate = useNavigate()
  const handleLogin= async (e) => {
    e.preventDefault()
    const {email, password } = details
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
        <label>E-mail</label>
        <input name='email' className='input' type='text' autoComplete='off' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} required style={{color:'white'}}></input>
      </div>
      <div className='form-element'>
        <label>Password</label>
        <input name='password' className='input' type='text' autoComplete='off' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} required style={{color:'white'}}></input>
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
        onClick={handleLogin}>Login</button></div>
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
        style={{color: 'white', fontSize: '18px', marginTop: '10px', marginBottom: '10px'}}>
          Don't have an account? <Link to='/register' style={{color: 'white', textDecoration: 'none'}}>Sign Up</Link>
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
