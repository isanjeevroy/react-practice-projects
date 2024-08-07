import React from 'react'
import Template from '../components/Template'
import login from '../assets/login.png'
function Login({setIsLoggedIn}) {
  return (
    <Template
    title="welcome Back"
    desc1="Build skills for today, tomorrow, and beyound."
    desc2="Education to future-proof your career."
    formType="login"
    image={login}
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login