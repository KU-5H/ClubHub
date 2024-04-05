import React, {useState, useContext} from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {userContext} from '../../context/userContext'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function AdminCalendar() {
    const localizer = dayjsLocalizer(dayjs)
    const {user} = useContext(userContext)
    
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(dayjs);
    const [endDate, setEndDate] = useState(dayjs);

    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const [showForm, setShowForm] = useState(false);
    const today = dayjs();
    const [event, setEvent] = useState([{
        title: 'Temporary Event',
        desc: 'This is a temporary event',
        start: today.hour(15).minute(0).second(0).toDate(),
        end: today.hour(16).minute(0).second(0).toDate(),
        allDay: false
      },
      {
        title: 'Temporary Event 3',
        start: today.hour(19).minute(0).second(0).toDate(),
        end: today.hour(20).minute(0).second(0).toDate(),
        allDay: false
      }
    ]);

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
        const title = e.target[0].value;
        const text = e.target[1].value;
        console.log(title);
        console.log(text);
        console.log('Startdate', startDate);
        console.log('Starttime', startTime);
        console.log('endDate', endDate);
        console.log('endTime',endTime);
        if(showForm) {
            const startDateTime = dayjs(startDate).hour(dayjs(startTime).hour()).minute(dayjs(startTime).minute()).second(0);
            const endDateTime = dayjs(endDate).hour(dayjs(endTime).hour()).minute(dayjs(endTime).minute()).second(0);

            setEvent([...event, {
                title: title,
                desc: text,
                start: startDateTime.toDate(),
                end: endDateTime.toDate(),
            }]);
            setShowForm(false)
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
                                    <LocalizationProvider className='' dateAdapter={AdapterDayjs}>
                                        <DatePicker  label='Pick a Date...' value={startDate} onChange={(newValue) => setStartDate(newValue)}/>
                                        <TimePicker  label='Select Time...' value={startTime} onChange={(newValue) => setStartTime(newValue)}/>
                                    </LocalizationProvider>
                                </div>
                                <h2>to</h2>
                                <div className='date-time-end'>
                                    <LocalizationProvider className='dateEnd' dateAdapter={AdapterDayjs}>
                                        <DatePicker label='Pick a Date...' value={endDate} onChange={(newValue) => setEndDate(newValue)} />
                                        <TimePicker  label='Select Time...'value={endTime} onChange={(newValue) => setEndTime(newValue)}/>
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div className="calender-options">
                                <button type='button'  className="announcement-option cancel" onClick={cancelEvent}>Cancel</button>
                                <button type="submit" className="announcement-option submit">Submit</button>
                            </div>
                        </form>
                        )}
                    <div className='calender'>
                        <Calendar
                            localizer={localizer}
                            events={event}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 700, width: '90%',  margin: '50px', fontFamily: 'Poppins'}}
                            onSelectEvent={event => {
                                console.log(event);
                                console.log(event.desc);
                            }}
                        />
                    </div>

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