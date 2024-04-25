import React from 'react'
import dropdown from '../Images/dropdown.png'
import cross from '../Images/cross.jpg'
import './Body.css'
import doc from '../Images/circle-photo.png'
import capsule from '../Images/capsule.jpg'
import scholar from '../Images/scholar-hat.jpg'
import message from '../Images/message.png'

const Body = () => {
  return (
    <div className='body'>
      <div className='top'>
        <button className='but1'>
            <p>Expertise</p>
            <img src={dropdown} alt=''/>
        </button>
        <button className='but2'>
            <p>Gender</p>
            <img src={dropdown} alt=''/>
        </button>
        <button className='but3'>
            <p>Fees</p>
            <img src={dropdown} alt=''/>
        </button>
        <button className='but4'>
            <p>Languages</p>
            <img src={dropdown} alt=''/>
        </button>
        <button className='but5'>
            <p>All filters</p>
            <img src={dropdown} alt=''/>
        </button>
      </div>
      <div className='mid'>
      <button className='buton1'>
            <p>Hair care</p>
            <img src={cross} alt=''/>
        </button>

        <button className='buton2'>
            <p>Female</p>
            <img src={cross} alt=''/>
        </button>

        <button className='buton3'>
            <p>Rs.0-Rs.500</p>
            <img src={cross} alt=''/>
        </button>

        <button className='buton4'>
            <p>Hindi</p>
            <img src={cross} alt=''/>
        </button>
      </div>

      <div className='last'>
        <div className='box1'>
<img src={doc} alt=''/>
<button className='rate'>
<p>4.5</p>
<span className='star'>&#9733;</span>
</button>
<h1>Dr. Prerna Narang</h1>
<div className='speciality'>
<img src={capsule} alt=''/>
<p>Male-Female Infertility</p>
</div>
<div className='Exp'>
<img src={scholar} alt=''/>
<p>7 years of Experience</p>
</div>
<div className='lang'>
<img src={message} alt=''/>
<p>Speaks: English, Hindi, Marathi</p>
</div>

<div className='price'>
    <button className='first'>
        <p>Video Consultation</p>
        <p className='amount'>₹800</p>
    </button>
    <button className='second'>
        <p>Chat Consultation</p>
        <p className='amount'>Free</p>
    </button>
</div>

<button className='profile'>View Profile</button>
<button className='booking'>Book a consultation</button>
        </div>

        <div className='box2'>
<img src={doc} alt=''/>
<button className='rate'>
<p>4.5</p>
<span className='star'>&#9733;</span>
</button>
<h1>Dr. Prerna Narang</h1>
<div className='speciality'>
<img src={capsule} alt=''/>
<p>Male-Female Infertility</p>
</div>
<div className='Exp'>
<img src={scholar} alt=''/>
<p>7 years of Experience</p>
</div>
<div className='lang'>
<img src={message} alt=''/>
<p>Speaks: English, Hindi, Marathi</p>
</div>

<div className='price'>
    <button className='first'>
        <p>Video Consultation</p>
        <p className='amount'>₹800</p>
    </button>
    <button className='second'>
        <p>Chat Consultation</p>
        <p className='amount'>Free</p>
    </button>
</div>

<button className='profile'>View Profile</button>
<button className='booking'>Book a consultation</button>
        </div>

        <div className='box3'>
<img src={doc} alt=''/>
<button className='rate'>
<p>4.5</p>
<span className='star'>&#9733;</span>
</button>
<h1>Dr. Prerna Narang</h1>
<div className='speciality'>
<img src={capsule} alt=''/>
<p>Male-Female Infertility</p>
</div>
<div className='Exp'>
<img src={scholar} alt=''/>
<p>7 years of Experience</p>
</div>
<div className='lang'>
<img src={message} alt=''/>
<p>Speaks: English, Hindi, Marathi</p>
</div>

<div className='price'>
    <button className='first'>
        <p>Video Consultation</p>
        <p className='amount'>₹800</p>
    </button>
    <button className='second'>
        <p>Chat Consultation</p>
        <p className='amount'>Free</p>
    </button>
</div>

<button className='profile'>View Profile</button>
<button className='booking'>Book a consultation</button>
        </div>
      </div>
    </div>
  )
}

export default Body
