
import React, { useState } from 'react';
import '../components/Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });

    toast.success("Login successful");
    navigate('/dashboard'); // redirect after login
  };

  return (
    <div className='signup-wrapper'>
      <div className='signup-box'>
        <div className='signup-left'>
          <img alt='school img' src={require('../assests/school img.png')} />
          <h1 className='signup-left-heading'>JIS SCHOOL</h1>
          <p className='signup-left-para'>Learn with us</p>
        </div>

        <div className='signup-right'>
          <hr />
          <form onSubmit={submitHandler} className='form'>
            <h1>Login to your account</h1>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Email'
            />
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
            />
            <button type='submit'>Submit</button>
            <Link className='link' to='/signup'>create your Account</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
