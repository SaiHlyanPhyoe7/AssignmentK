import '../signin/signin.css'
import {BsEnvelope, BsPersonCircle} from 'react-icons/bs'
import {AiOutlineUnlock} from 'react-icons/ai'
import {useSignup} from "../../hooks/useSignup";
import {useState} from "react";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const {error, signup} = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email,password,username)
    }

  return (
    <div className='container'>
        <form className='form-container' onSubmit={handleSubmit}>
            <h1 className="title">Sign Up</h1>
            <div className='input-container'>
                <label htmlFor='username'>
                <BsPersonCircle className='icon'/>
                </label>
                <input required
                       type="text"
                       onChange={(e) => setUsername(e.target.value)}
                       value={username}
                       className='input' placeholder='Enter Username' />
            </div>
            <div className='input-container'>
                <label htmlFor='email'>
                <BsEnvelope className='icon'/>
                </label>
                <input required
                       type="email"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}
                       className='input' placeholder='Enter Email Address' />
            </div>
            <div className='input-container'>
                <label htmlFor='password'>
                <AiOutlineUnlock className='icon'/>
                </label>
                <input required
                       type="password"
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}
                       className='input' placeholder='Enter Password' />
            </div>
            <button className='btn'> <span className='btn-span'></span>Sign Up</button>
            {error && <p className='error'>{error}</p>}
        </form>

    </div>
  )
}

export default Signup