import './signin.css'
import {BsEnvelope, BsPersonCircle} from 'react-icons/bs'
import {useLogin} from "../../hooks/useLogin";
import {useState} from "react";
import { useNavigate} from 'react-router-dom'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, login} = useLogin()
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email,password)
        nav('/')
    }

  return (
    <div className='container'>
        <form className='form-container' onSubmit={handleSubmit}>
            <h1 className="title">Sign In</h1>
            <div className='input-container'>
                <label htmlFor='username'>
                <BsPersonCircle className='icon'/>
                </label>
                <input required
                       type="email"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}
                       id='username'
                       className='input' placeholder='Enter email' />
            </div>
            <div className='input-container'>
                <label htmlFor='password'>
                <BsEnvelope className='icon'/>
                </label>
                <input required
                       type="password"
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}
                       id='email'
                       className='input' placeholder='Enter Password' />
            </div>
            <button className='btn'> <span className='btn-span'></span>Sign In</button>
            {error && <p className='error'>{error}</p>}
        </form>

    </div>
  )
}

export default Signin