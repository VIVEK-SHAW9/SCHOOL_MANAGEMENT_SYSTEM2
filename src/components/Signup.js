import React, { useState } from 'react'
import '../components/Style.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const Singup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [imageurl, setImageurl] = useState('');
  const [isLoading,setLoading]= useState('');
  

  const navigate = useNavigate();

const submitHandler = (event)=> {
  event.preventDefault();
 console.log(name,email,phone,password,image)
 toast.success("Signup successful")

 navigate('/login')
}

const fileHandler = (e)=>{
setImage(e.target.files[0])
setImageurl(URL.createObjectURL(e.target.files[0]))

}

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
             <h1>create your account</h1>
            <input required onChange={e=>{setName(e.target.value)}} type='text' placeholder='School Name' />
            <input required onChange={e=>{setEmail(e.target.value)}} type='email' placeholder='Email' />
            <input required onChange={e=>{setPhone(e.target.value)}} type='text' placeholder='Phone' />
            <input required onChange={e=>{setPassword(e.target.value)}} type='password' placeholder='Password' />
            <input required onChange={fileHandler} type='file'/>
            {imageurl && <img className='your-logo' alt='your logo' src = {imageurl}/> }
            <button type='submit'>{isLoading && <i className='fa-solid fa-spinner fa-spin-pulse'></i>}Submit</button>
              <Link className='link' to='/Login'>Login with your Account</Link>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Singup
