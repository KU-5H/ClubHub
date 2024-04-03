// contains info about what the club is about 
// Contains information about schedule of events coming up, location, and a way to contact, organization

import location from './../assets/location.png';
import schedule from './../assets/schedule.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import {userContext} from '../../context/userContext'

export default function About() {
  const {user} = useContext(userContext)
  const navigate = useNavigate()
  useEffect(() => {
    if(user) {
      navigate('/home')
    }
  })

  const login = () => {
    navigate('/login')
  }

  const register = () => {
    navigate('/register')
  }

    return (
      <div className="about-section">
        <div className="about-category blue">
          <p>Welcome to ClubHub! 🥳<br />
            <br />
            The one and only club managment site you will ever need! <br />
            <br />
            You can get started by registering or logging in. <br />
            </p>
            <div className='about-buttons'>
              <button className='about-button' onClick={login}>Login</button>
              <button className='about-button' onClick={register}>Register</button>
            </div>
        </div>
        <div className="about-category">
          <p>Practices on Wednesday from 4:00pm to 6:00pm and Fridays from 6:00pm to 8:00pm</p>
          <img className='about-image' src={schedule}/>
        </div>
        <div className="about-category blue">
          <p>at Toronto Metropolitan University</p>
          <img className='about-image' src={location}/>
        </div>
        <div className="about-category">
          <p>To contact us, send an email to us at clubbinRUs@clubbin.com</p>
        </div>
      </div>
    );
  }