import './main.css';
import speaker from "../assets/speaker.jpeg"
import Validation from './SignupValidation';
import {useState} from 'react'


const Signup = () => {
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
    });
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }


  return (
    <section className="register">
        <div className="register-section">
            <div className="register-container">
                <div className='register-form'>
                    <div className='forms'>
                        <div className='head'>
                            <h1>SIGN UP</h1>
                            <p>Create an account to get started.</p>
                        </div>
                        <form action='' onSubmit={handleSubmit}> 
                            <div className='form-l'>
                                <input type='text' placeholder='Name' name='name'
                                onChange={handleInput}/><br/>
                                {errors.name && <span className="text-danger">{errors.name}</span>}
                            </div>
                            <div className='form-l'>
                                <input type='text' placeholder='Email' name='email'
                                onChange={handleInput}/><br/>
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                            </div>
                            <div className='form-l'>
                                <input type='' placeholder='Password' name='password'
                                onChange={handleInput}/><br/>
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                            </div>
                            <div className='check'>
                                <input type='checkbox'/>
                                <p>Remember me</p>
                            </div>

                            <button id="register-btn">Register</button>
                            <p>Already have an account? Log in</p>
                        </form>
                    </div>

                    <div className='images'>
                        <img src={speaker}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup