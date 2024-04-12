// contains info about what the club is about 
// Contains information about schedule of events coming up, location, and a way to contact, organization

import location from './../assets/location.png';
import schedule from './../assets/schedule.png';
import announcement from './../assets/announcement.png';
import calender from './../assets/calender.png';
import finances from './../assets/finances.png';
import userFinance from './../assets/userFinance.png';
import business from './../assets/business.webp';
import user2 from './../assets/user.png';
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
    window.scrollTo(0, window.innerHeight * 0.13);
    setTimeout(() => {
      document.getElementById('arrow').style.display = 'block';
    }, 3000);
  })

  const login = () => {
    navigate('/login')
  }

  const register = () => {
    navigate('/register')
  }

    return (
      <div className="about-section">
        <div className='about-category-4 blue'>
          <div>
            <h2 className='announcement-h2'>ClubHub</h2>
            <p>The one and only club managment site you will ever need!</p>
            <div className='about-buttons'>
              <button className='about-button' onClick={register}>Get Started</button>
            </div>
          </div>
          <img className='about-image2 about-category-2-right' src={user2}/>
          <div id="arrow" className="arrow" style={{display: 'none'}}>
            <i className="fas fa-arrow-down">↓</i>
          </div>
        </div>
        <div className="about-category">
          <h2>What does ClubHub Offer?</h2>
          <br />
          <p>ClubHub is a club management site that allows you to manage all your clubs in one place. It offers a variety of features such as:</p>
          <div className='about-images'>
              <img className='about-image' src={announcement}/>
              <img className='about-image' src={calender}/>
              <img className='about-image' src={userFinance}/>
          </div>
        </div>
        <div className="about-category blue">
          <h2 className='announcement-h2'>Announcements</h2>
          <p className='announcement-p'>Announcements let the coach post notices or things that members might need to see </p>
          <img className='about-image' src={announcement}/>
        </div>
        <div className='about-category-2'>
          <div>
            <h2>Calender</h2>
            <p>The interactive calender let's the admin create events that members can interact with and see</p>
          </div>
          <img className='about-image about-category-2-right' src={calender}/>
        </div>
        <div className='about-category-3 blue'>
          <img className='about-image image-finance' src={finances}/>
            <div>
              <h2 className='announcement-h2'>Finances</h2>
              <p>The Finances page lets the Treasurer and Admin add payments to Members accounts. Members
              can even see their payments and make payments straight from the app.</p>
            </div>
        </div>
        <div className="about-category">
          <h2>So What Are You Waiting For?</h2>
          <p className='announcement-p'>Get started with ClubHub today by singing up! </p>
          <button className='about-button' onClick={register}>Get Started</button>
        </div>
      </div>
    );
  }