import React from 'react'
import './Profile.css'
import back from '../Images/background.jpg'
import location from '../Images/location-icon.webp'
import forward_arrow from '../Images/arrow-forward.png'
import dropdown from '../Images/dropdown.png'

const Profile = () => {
  return (
    <div className='container'>
      <img className='cont' src={back} alt=''/>
      <h2>Find Expert Doctors For An In-Clinic Session Here</h2>
      <div className='but'>
<button className='select_loc'>
    <img className='loc' src={location} alt=''/><span>Select Location</span>
<img className='dropdown' src={dropdown} alt=''/>
</button>
<button className='demo'>
    <p>eg. Doctor, specialisation, clinic name</p>
    <img src={forward_arrow} alt=''/>
</button>
</div>
    </div>
  )
}

export default Profile
   