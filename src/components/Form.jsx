import React, { useState } from 'react'
import './form.css';
const Form = () => {

  const [classname,setclassname]=useState(true)
  function handlesubmit(e){
    e.preventDefault()
    setclassname(false)
  }

  return (
   <div className='form'>
    <h1 className='form-heading'>
      Join the Waitlist
    </h1>
    {
      classname ?
      <><div className='form-inputs'>
      <label htmlFor="name"></label>
      <input type="text" placeholder='name' className='input'/>
      <label htmlFor="number"></label>
      <input type="text" placeholder='phone number' className='input'/>
      <label htmlFor="city"></label>
      <input type="text" placeholder='city'  className='input'/>
    </div>
    <button className="form-btn" onClick={(e)=>handlesubmit(e)}>Join the Waitlist</button></> 
    : <h1 className='form-greetings'>
    Thank you!
  </h1>}

   </div> 
  )
}

export default Form