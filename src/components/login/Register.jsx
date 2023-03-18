import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { useState } from 'react';


const Register = () => {

  const navigate = useNavigate();

  const [register, setRegister] = useState({});
  const updateRegister = (e) => {
    setRegister({
      ...register, [e.target.name]: e.target.value
    })
  }

  const submit = (e)=>{
      e.preventDefault();
      localStorage.setItem('register',JSON.stringify(register))
      navigate('/login');
  }

  return (
    <div className="register-container">
      <div className='register'>
        <FaUserAlt size='2em' className='user-icon' />
        <h1 className='register-title'>Welcome to Airbus</h1>
        <p className='register-text'>Kindly register to proceed</p>
        <form className='register-form' onSubmit={submit}>
          <label htmlFor="email">Email
            <input type="email" name="email" id="email" placeholder='Enter your email' required onChange={updateRegister} />
          </label>
          <label htmlFor="password" title='Enter a password of 6 to 8 in length'>Password
            <input type="password" name="password" id="password" placeholder='Enter your password' minLength='6' maxLength='8' required onChange={updateRegister} />
          </label>
            <button className="btn">Register</button>
        </form>
        <p className='log-in'><a href="/login">Registered Log-in</a></p>
      </div>
    </div>
  )
}

export default Register