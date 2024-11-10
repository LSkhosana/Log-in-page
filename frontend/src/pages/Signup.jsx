import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';
import speaker from "../assets/speaker.jpeg";
import './main.css';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
    const handleInput = (event) => {
        // Remove the array brackets here
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Debug logging
        console.log('Form values before submission:', values);
        
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        
        // Check if there are any validation errors
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8000/signup', values);
                console.log('Signup response:', response);
                
                if (response.data.message === "User registered successfully") {
                    navigate('/login');
                }
            } catch (err) {
                console.error('Signup error details:', err.response?.data || err.message);
                alert(err.response?.data?.error || "Registration failed");
            }
        } else {
            console.log('Validation errors:', validationErrors);
        }
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
                            <form onSubmit={handleSubmit}> 
                                <div className='form-l'>
                                    <input 
                                        type='text' 
                                        placeholder='Name' 
                                        name='name'
                                        value={values.name}
                                        onChange={handleInput}
                                    />
                                    {errors.name && <span className="text-danger">{errors.name}</span>}
                                </div>
                                <div className='form-l'>
                                    <input 
                                        type='email' 
                                        placeholder='Email' 
                                        name='email'
                                        value={values.email}
                                        onChange={handleInput}
                                    />
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>
                                <div className='form-l'>
                                    <input 
                                        type='password' 
                                        placeholder='Password' 
                                        name='password'
                                        value={values.password}
                                        onChange={handleInput}
                                    />
                                    {errors.password && <span className="text-danger">{errors.password}</span>}
                                </div>
                                <div className='check'>
                                    <input type='checkbox'/>
                                    <p>Remember me</p>
                                </div>

                                <button type="submit" id="register-btn">Register</button>
                                <p>Already have an account? Log in</p>
                            </form>
                        </div>

                        <div className='images'>
                            <img src={speaker} alt="Speaker"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;