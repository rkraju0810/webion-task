import React from 'react'
import iphone from '../assests/iphone13-Layout.png'
import logo from '../assests/FoodieLogo.png'
import './content.css';

const Content = () => {
  return (
    <div className='body-content'>
      <div className='iphone-bg'>
      <img src={iphone} className='iphone' alt="" />
      </div>
        <div className='text-content'>
        <img src={logo} className="logo-content" alt=""/>
        <h1>Welcome to Foodie</h1>
        <p className='des'>At foodie,we redefine convenience with our seamless food delivery service. Whether you're craving the flavors of home or exploring new culinary delights, foodie brings it all to Your doorstep. From hearty breakfast to gourmet dinners and everything in between, our curated menu caters to every palate and preference </p>
        <div className='just'>
        <button className="content-btn">Join the Waitlist</button>
        </div>
        </div>

    </div>
  )
}

export default Content