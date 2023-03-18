import './login_register.css'
import {FaUserAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = ({setLoggedIn}) => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({});
  const updateLoginData = (e) => {
    console.log(loginData);
    setLoginData({
      ...loginData, [e.target.name]: e.target.value
    })
    console.log(loginData);
  }

  function authenticate(localData){
    
    if (localData.email === loginData.email && localData.password === loginData.password) {
      setLoggedIn(true);
      localStorage.setItem('loggedIn', true)
      navigate('/flights')
    }
  }

  const submit = (e) => {
    e.preventDefault();
    let localData = JSON.parse(localStorage.getItem('register'));
    if(localData){
      authenticate(localData)
    }else{
      alert("Kindly register")
    }
  }

  return (
    <div className="login-container">
      <div className='login'>
        <FaUserAlt size='2em' className='user-icon' />
        <h1 className='login-title'>Welcome to Airbus</h1>
        <p className='login-text'>Kindly login to proceed</p>
        <form className='login-form' onSubmit={submit}>
          <label htmlFor="email">Email
            <input type="email" name="email" id="email" placeholder='Enter your email' required onChange={updateLoginData} />
          </label>
          <label htmlFor="password" title='Enter a password of 6 to 8 in length'>Password
            <input type="password" name="password" id="password" placeholder='Enter your password' minLength='6' maxLength='8' required onChange={updateLoginData} />
          </label>
          <button className="btn" type='submit'>Login</button>
        </form>
        <p className='login-new'><a href="/register">Register for new user?</a></p>
      </div>
    </div>
  )
}

export default Login