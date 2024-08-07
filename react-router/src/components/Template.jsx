import React from 'react'
import imageFrame from '../assets/imageFrame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

function Template({title, desc1, desc2, formType, image,setIsLoggedIn}) {
  return (
    <div className='flex'>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>Sign up with google</button>
        </div>

        <div>
            {/* <img src={imageFrame}
             alt="pattern"
             width={558}
             height={504}
             loading='lazy' /> */}

            <img src={image}
             alt="student"
             width={558}
             height={490}
             loading='lazy' />
        </div>
    </div>
  )
}

export default Template