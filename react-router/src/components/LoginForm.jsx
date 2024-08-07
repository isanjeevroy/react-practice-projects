import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm({setIsLoggedIn}) {

  let navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email:"",
    password:""
  })

  const [showPassword, setShowPassword] = useState(false);

  function passwordToggle(){
    setShowPassword(!showPassword);
  }

  function changeHandler(event){
    setLoginData(prev=>({...prev,[event.target.name]:event.target.value }))
  }

  function submitHandler(event){
      event.preventDefault();
      setIsLoggedIn(true);
      navigate("/dashboard");
      toast.success("Logged in sucessfully");
      console.log(loginData);
  }

return (
  <div>
      <form onSubmit={submitHandler}>

          <label htmlFor="email">Email Addresss<sup>*</sup></label> <br />
          <input type="email" id="email" name='email' placeholder='Enter eamil address' 
          required
          onChange={changeHandler}
          value={loginData.name}
          />
          <br />

          <label htmlFor="password">Password<sup>*</sup></label>
          <br />
          <input id='password' name='password' placeholder='Enter Password' 
          type={showPassword? "text" : "password"}
          required 
          onChange={changeHandler}
          value={loginData.name}
          />
          <span onClick={passwordToggle}>
            {showPassword?(<FaEye/>):(<FaEyeSlash />)}
          </span>

          <br />
          
          <button>submit</button>

      </form>
  </div>
)
}

export default LoginForm