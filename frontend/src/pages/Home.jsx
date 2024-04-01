import { useState, useContext} from "react";
import {UserContext} from '../../context/userContext'
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

// Home page should be for announcements/updates

function Home() {
  const {user} = useContext(UserContext)

  //these announcements are hard coded, the real announcements will need to be retrieved from database 
  const [announcements, setAnnouncements] = useState([
    { title: 'Title 1', body: 'here is some text about the announcement and more' },
    { title: 'Title 2', body: 'here is some text about the announcement' },
    { title: 'Title 3', body: 'here is some text about the announcement' }
  ]);

  const [data, setData] = useState({
    title: '',
    text: '',
  })

  const [newAnnouncement, setNewAnnouncement] = useState([])

  function createAnnouncementDraft() {
    setNewAnnouncement([1]);
  }

  function cancelAnnouncement() {
    setNewAnnouncement([]);
  }

  function updateAnnouncements(e) {
    e.preventDefault();
    console.log(data)
    const titleA = e.target[0].value;
    const bodyA = e.target[1].value;
    // send api call to database to update announcements
    cancelAnnouncement();
    setAnnouncements([{title: titleA, body: bodyA}, ...announcements]);
  }

  


  return (
    <div>
      {user ? (<div className="announcements-page">
        <div className="announcements-title">
          <p className="pages-title">Announcements</p>
          {user.role === 'Admin' && (<p className='add-announcement' onClick={() => createAnnouncementDraft()}>+</p>)}
        </div>
        {newAnnouncement.map(announcement => (
          <form onSubmit={updateAnnouncements} key={uuidv4()} className="announcement-container">
            <input type="text" placeholder="Title Text..."  value={data.title} onChange={(e) => setData({...data, title: e.target.value})}/>
            <textarea placeholder="text goes here..." value={data.text} className="new-announcement-textarea" onChange={(e) => setData({...data, text: e.target.value})} />
            <div className="announcement-options">
              <button className="announcement-option cancel">Cancel</button>
              <button type="submit" className="announcement-option submit">Submit</button>
            </div>
          </form>
        ))}
        {announcements.map(announcement => (
          <div key={uuidv4()} className="announcement-container">
            <p>{announcement.title}</p>
            <textarea className="announcement-container-textarea" value={announcement.body} readOnly />
          </div>
      ))}
      </div>) : (
        <Navigate to='/login' replace={true}/>
      )}
    </div>
  );
}
  
export default Home;