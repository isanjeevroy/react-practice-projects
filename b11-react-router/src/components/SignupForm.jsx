import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignupForm({ setIsLoggedIn }) {

  let navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function passwordToggle(){
    setShowPassword(!showPassword);
  }

  function confirmPasswordToggle(){
    setShowConfirmPassword(!showConfirmPassword);
  }

  function changeHandler(event) {
    setSignupData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  function submitHandler(event) {
    event.preventDefault();
    if (signupData.password === signupData.confirmPassword) {
      navigate("/dashboard");
      setIsLoggedIn(true);
      toast.success("Logged in successfully");
      console.log(signupData);
    } else {
      toast.error("Password didn't match!");
    }

  }

  return (
    <div>

      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">First Name <sup>*</sup></label> <br />
          <input type="text" id='firstName' name='firstName' placeholder='Enter first name'
            value={signupData.name}
            onChange={changeHandler} />

          <br />

          <label htmlFor="lastName">Last Name <sup>*</sup></label> <br />
          <input type="text" id='lastName' name='lastName' placeholder='Enter last name'
            value={signupData.name}
            onChange={changeHandler} />
        </div>

        <label htmlFor="email">Email Address<sup>*</sup> </label>
        <br />
        <input type="email" id='email' name='email' placeholder='Email email address' required
          value={signupData.name}
          onChange={changeHandler} />
        <br />

        <div>
          <label htmlFor="password">Create Password<sup>*</sup></label><br />
          <input id='password' name='password' placeholder='Enter Password' required
            value={signupData.name}
            onChange={changeHandler} 
            type={showPassword ? "text" : "password"}
            />
          <span onClick={passwordToggle}>
            {showPassword ? (<FaEye />) : (<FaEyeSlash />)}
          </span>
          <br />

          <label htmlFor="confirmPassword">Confirm Password<sup>*</sup></label><br />
          <input  id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' required
            value={signupData.name}
            onChange={changeHandler}
            type={showConfirmPassword ? "text" : "password"}
             />
          <span onClick={confirmPasswordToggle}>
            {showConfirmPassword ? (<FaEye />) : (<FaEyeSlash />)}
          </span>
        </div>

        <button>Create Account</button>
      </form>

    </div>
  )
}

export default SignupForm