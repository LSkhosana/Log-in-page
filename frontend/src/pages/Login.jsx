import speaker from "../assets/speaker.jpeg"
import {useState} from 'react'
import Validation from "./LoginValidation";
import './main.css';

const Login = () => {
    const [values, setValues] = useState({
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
                                <h1>LOG IN</h1>
                            </div>
                            <form action='' onSubmit={handleSubmit}> 
                                <div className='form-l'>
                                    <input type='text' placeholder='Name' name="name"
                                    onChange={handleInput}/>
                                    <span>{errors}</span>
                                </div>
                                <div className='form-l'>
                                    <input type='text' placeholder='Email' name="email"
                                    onChange={handleInput}/>
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>
                                <div className='form-l'>
                                    <input type='' placeholder='Password' name="password"
                                    onChange={handleInput}/>
                                    {errors.password && <span className="text-danger">{errors.password}</span>}
                                </div>
                                <div className='check'>
                                    <input type='checkbox'/>
                                    <p>Remember me</p>
                                </div>

                                <button type='submit' id="register-btn">Log In</button>
                                <p>Do not have an account? Sign Up</p>
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

export default Login