import React, {useState, useContext} from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {userContext} from '../../context/userContext'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Calendar() {
    const {user} = useContext(userContext)
    const [date, setDate] = useState(new Date());
    const [showForm, setShowForm] = useState(false);

    const handleClick = (date) => {
        console.log(date);
        setDate(date);
    }

    function makeEvent() {
        setShowForm(true);
    }

    function cancelEvent() {
        setShowForm(false);
    }

    const newEvent = (e) => {
        e.preventDefault();
        if(showForm) {
            console.log('new event');
        }
    }

    return (
        <div>
            {user ? (
                <div className='calender-container'>
                    <div className="announcements-title">
                        <p className="pages-title">Calender</p>
                        {user.role === 'Admin' && (<p className='add-announcement' onClick={() => makeEvent()}>+</p>)}
                    </div>
                    {showForm && (
                        <form onSubmit={newEvent} key={uuidv4()} className="announcement-container">
                            <input type="text" placeholder="Event Name..."/>
                            <textarea 
                            key="text"
                            placeholder="Event Description..." 
                            className="new-announcement-textarea" 
                            />
                            <div className='date-options'>
                                <div className="date-time-start">
                                    <input type="date" placeholder="Date"/>
                                    <input type="time" placeholder="Time"/>
                                </div>
                                <h2>to</h2>
                                <div className='data-time-end'>
                                    <input type="date" placeholder="Date"/>
                                    <input type="time" placeholder="Time"/>
                                </div>
                            </div>
                            <div className="calender-options">
                                <button type='button'  className="announcement-option cancel" onClick={cancelEvent}>Cancel</button>
                                <button type="submit" className="announcement-option submit">Submit</button>
                            </div>
                        </form>
                        )}
                    <ReactCalendar className='calendar'
                        onChange={handleClick}
                        value={date}
                    />
                </div>) : (
                <div className="unauthorized-container">
                    <div className="unauthorized-message"> Unauthorized!</div>
                    <div className="message">You are not authorized to see this page. Please <Link to={'/Login'}>Login</Link> First</div>
                </div>
            )
            }
        </div>
    )
}