import './main.css';
import speaker from "../assets/speaker.jpeg"

const Register = () => {
  return (
    <div className='register'>
        <div className='forms'>
            <div className='head'>
                <h1>SIGN UP</h1>
                <p>Create an account to get started.</p>
            </div>
            <form>
                <div className='form-l'>
                    <input type='text' placeholder='Name'/>
                </div>
                <div className='form-l'>
                    <input type='text' placeholder='Email'/>
                </div>
                <div className='form-l'>
                    <input type='' placeholder='Password'/>
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
  )
}

export default Register