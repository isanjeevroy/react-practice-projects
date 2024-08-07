import React from 'react'
import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postCode: "",
    comments: false, candidates: false, offers: false,
    pushNotifications: ""

  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleForm(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className='bg-slate-100 flex flex-col items-center py-10' >
      <form className=' w-[600px] flex flex-col  gap-2 justify-center border-2 p-6 rounded-md'  onSubmit={handleForm}>
            <h1 className='flex justify-center font-bold text-2xl'>Fill the given form</h1>
          <label htmlFor="firstName">First Name</label>
          <input type='text' name='firstName' id='firstName' placeholder='Alexy'
            onChange={changeHandler} value={formData.name}
             className='p-1.5 rounded-sm border border-gray-300'
          />
    
          <label htmlFor="lastName">Last Name</label>
          <input type='text' name='lastName' id='lastName' placeholder='Yadav'
            onChange={changeHandler} value={formData.name}
             className='p-1.5 rounded-sm border border-gray-300'
          />

        <label htmlFor="email">Email</label>
        <input type='email' name='email' id='email' placeholder='email address'
          onChange={changeHandler} value={formData.name}
           className='p-1.5 rounded-sm border border-gray-300'
        />

        <label htmlFor="country">Country</label>
        <select name="country" id="country" onChange={changeHandler}
         className='p-1.5 rounded-sm border border-gray-300'
        >
          <option value="">select</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="nepal">Nepal</option>
        </select>

        <label htmlFor="streetAddress">Address</label>
        <input type='text' name='streetAddress' id='streetAddress' placeholder='street address'
          onChange={changeHandler} value={formData.name}
           className='p-1.5 rounded-sm border border-gray-300'
        />

        <label htmlFor="city">City</label>
        <input type='text' name='city' id='city' placeholder='guntur'
          onChange={changeHandler} value={formData.name}
           className='p-1.5 rounded-sm border border-gray-300'
        />

        <label htmlFor="state">State</label>
        <input type='text' name='state' id='state' placeholder='Andhra Pradesh'
          onChange={changeHandler} value={formData.name}
           className='p-1.5 rounded-sm border border-gray-300'
        />

        <label htmlFor="postCode">Postal Code/PIN Code</label>
        <input type='text' name='postCode' id='postCode' placeholder='522213'
          onChange={changeHandler} value={formData.name}
           className='p-1.5 rounded-sm border border-gray-300'
        />

        <fieldset className='mb-2'>
          <legend>By Email</legend>

          <input type="checkbox" id="comments" name="comments" onChange={changeHandler} checked={formData.comments} />
         
          <label className='pl-2'  htmlFor="comments">Comments</label>
<p className='pl-5 text-gray-500 mb-1'>Get notified when someone posts a comment on posting.</p>
         
          
          <input type="checkbox" id="candidates" name="candidates" onChange={changeHandler} checked={formData.candidates} />
          
          <label className='pl-2'  htmlFor="candidates">Candidates</label>
<p className='pl-5 text-gray-500 mb-1'>Get notified when a candidate apply for a job.</p>
          
         
          <input type="checkbox" id="offers" name="offers" onChange={changeHandler} checked={formData.offers} />
        
          <label className='pl-2' htmlFor="offers">Offers</label>
          <p className='pl-5 text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>

         
        </fieldset>
          
        <fieldset className='mb-2'>
          <div>
          <legend>Push Notifications</legend>
          <p className='text-gray-500 mb-1'>There are delivers vias SMS to your mobile phone.</p>
          </div>
         

          <input type='radio' name='pushNotifications' id='everything' onChange={changeHandler} value="everything" 
        
          />
          <label htmlFor="everything" className='pl-2'>Everything</label>
            <br />
          <input type='radio' name='pushNotifications' id='sameAsEmail' onChange={changeHandler} value="sameAsEmail" 
          />
          <label htmlFor="sameAsEmail" className='pl-2'>Same as email</label>
<br />
          <input type='radio' name='pushNotifications' id='noPushNotification' onChange={changeHandler} value="noPushNotification"
           />
          <label htmlFor="noPushNotification" className='pl-2'>No push notification</label>
        </fieldset>

        <input type="submit" value="Save" className='border border-blue-400 w-14 bg-blue-600 text-white px-3 py-1 rounded-sm cursor-pointer' />
      </form>
    </div>
  )
}

export default App