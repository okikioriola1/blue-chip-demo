import * as React from 'react'
import './signup.scss'
import SignUpImg from '../../assets/images/signup-img.png'
import SignUpFormLogo from '../../assets/images/signupform-logo.png'
import MicrosoftIcon from '../../assets/images/microsoft-icon.svg'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup-main'>
        <div className='signup-main-wrapper'>
            <div className='left'>
                <div className='left__wrapper'>
                    <div className='header'>
                        <h1>Seamless Ticketing</h1>
                        <h4>Sign Up Now </h4>
                    </div>
                    <div className='image'>
                        <img src={SignUpImg} alt="signup"/>

                    </div>

                </div>
            </div>
            <div className='right'>
                <div className='right__wrapper'>
                    <div className='header'>
                        <img src={SignUpFormLogo} alt="logo"/>
                        <h2>Ticketing and Issues Application</h2>
                    </div>
                    <div className='signupform-section'>
                        <form className='signupform'>
                            <label>
                                <h4>First Name </h4>
                                <input type="text" placeholder="First name" className="signup-input"/>
                            </label>
                            <label>
                                <h4>Last Name </h4>
                                <input type="text" placeholder="Last name" className="signup-input"/>
                            </label>
                            <label>
                                <h4>Email  </h4>
                                <input type="email" placeholder="Please enter your company email address" className="signup-input"/>
                            </label>
                            <label>
                                <h4>Password  </h4>
                                <input type="password" placeholder="Password" className="signup-input"/>
                            </label>
                            <label>
                                <h4>Organization  </h4>
                                <input type="text" placeholder="Select" className="signup-input"/>
                            </label>

                            <div className='signup-btn'>
                               <Link to='/dashboard'> <button className='signup'>Sign Up</button></Link>
                               <Link to='/dashboard'> <button className='microsoft-btn'><span><img src={MicrosoftIcon} alt="microsoft"/></span> Sign in with Microsoft</button></Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SignUp