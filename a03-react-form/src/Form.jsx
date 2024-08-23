import React from 'react'
import { useState } from 'react'

export default function Form() {
    let [formData, setFormData] = useState({
        username: "",
        fullName: "",
        password: ""
    });

    let handlerInputChange = (event) => {
        // let newField = event.target.name;
        // let newValue = event.target.value;
        setFormData((currData) => {
            // currData[newField]=newValue;
            return { ...currData, [event.target.name]:event.target.value};
        })
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            fullName: "",
            password: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                placeholder='enter username'
                value={formData.username}
                onChange={handlerInputChange}
                id='username'
                name='username'
            />
            <br /><br />
            <label htmlFor="fullName">Full Name</label>
            <input
                type="text"
                placeholder='enter full name'
                value={formData.fullName}
                onChange={handlerInputChange}
                id='fullName'
                name='fullName'
            />
            <br /> <br />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder='enter password'
                value={formData.password}
                onChange={handlerInputChange}
                id='password'
                name='password'
            />
            <br /> <br />

            <button>Submit</button>
        </form>
    )
}
