// contains info about what the club is about 
// Contains information about schedule of events coming up, location, and a way to contact, organization

import location from './../assets/location.png';
import schedule from './../assets/schedule.png';

export default function About() {
    return (
      <div className="about-section">
        <div className="about-category blue">
          <p>It's clubbin time!!! And then clubhub clubbed all over the place. Hope you enjoy! 😘</p>
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
          <p>To contact, call 666 666 6666 or email us at clubbinRUs@clubbin.com</p>
        </div>
      </div>
    );
  }