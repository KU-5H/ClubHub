import React, {useState, useContext, useEffect} from 'react'
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
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function AdminCalendar() {

    // Creation of the dayjs localizer, required for calender
    const localizer = dayjsLocalizer(dayjs)

    //User context for user authentication
    const {user} = useContext(userContext)

    //State to show the form for creating a new event
    const [showForm, setShowForm] = useState(false);

    //A state that stores all events in the calender
    const [event, setEvent] = useState([]);

    //States for modal events
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [eventData, setEventData] = useState({
        startDate: null,
        endDate: null,
        startTime: null,
        endTime: null,
      });

    useEffect(() => {
        const showData = async () => {
            const {data} = await axios.get('/calender')
            setEvent(prevEvents => [
              ...prevEvents,
              ...data.map(item => (
                { title: item.title, desc: item.text, start: dayjs(item.startDate).toDate(), end: dayjs(item.endDate).toDate()})), 
            ]);
          }
          showData()
    }, [])

    const handleClick = (date) => {
        console.log(date);
        setDate(date);
    }

    function makeEvent() {
        setShowForm(true);
    }

    function cancelEvent() {
        setEventData({});
        setShowForm(false);
    }

    const updateEvents = async (e, event) => {
        e.preventDefault();
        console.log(event.start)
    }

    const newEvent = async (e) => {
        e.preventDefault();
        const {startDate, endDate, startTime, endTime } = eventData;
        const title = e.target[0].value;
        const text = e.target[1].value;
        if(showForm) {
            const startDateTime = dayjs(startDate).hour(dayjs(startTime).hour()).minute(dayjs(startTime).minute()).second(0).toDate();
            const endDateTime = dayjs(endDate).hour(dayjs(endTime).hour()).minute(dayjs(endTime).minute()).second(0).toDate();

            try {
                const calenderData = await axios.post('/calenderevent', {
                    title, text, startDateTime, endDateTime
                });

                if(calenderData.data.error) {
                    toast.error(calenderData.data.error)
                } else {
                    setShowForm(false)
                    setEvent([...event, {
                        title: title,
                        desc: text,
                        start: startDateTime,
                        end: endDateTime,
                    }])
                    toast.success('New Event Added!')
                }
            } catch (error) {
                console.log(error)
            }
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
                            placeholder="Event Description (optional)..." 
                            className="new-announcement-textarea" 
                            />
                            <div className='date-options'>
                                <div className="date-time-start">
                                    <LocalizationProvider className='' dateAdapter={AdapterDayjs}>
                                        <DatePicker  label='Pick a Date...' value={eventData.startDate} onChange={(newValue) => setEventData({...eventData, startDate: newValue})}/>
                                        <TimePicker  label='Select Time...' value={eventData.startTime} onChange={(newValue) => setEventData({...eventData, startTime: newValue})}/>
                                    </LocalizationProvider>
                                </div>
                                <h2>to</h2>
                                <div className='date-time-end'>
                                    <LocalizationProvider className='dateEnd' dateAdapter={AdapterDayjs}>
                                        <DatePicker label='Pick a Date...' value={eventData.endDate} onChange={(newValue) => setEventData({...eventData, endDate: newValue})} />
                                        <TimePicker  label='Select Time...' value={eventData.endTime} onChange={(newValue) => setEventData({...eventData, endTime: newValue})}/>
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
                            style={{ height: 600, width: '90%',  margin: '50px', fontFamily: 'Poppins'}}
                            onSelectEvent={event => {
                                setSelectedEvent(event);
                                setModalIsOpen(true);
                            }}
                        />
                    </div>
                    
                </div>) : (
                <div className="unauthorized-container">
                    <div className="unauthorized-message"> Unauthorized!</div>
                    <div className="message">You are not authorized to see this page. Please <Link to={'/Login'}>Login</Link> First</div>
                </div>
            )}
            <Modal
                className={'modal'}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Event Details"
                style={{
                    overlay: {
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)', // This makes the background solid
                    },
                content: {
                    position: 'relative',
                    backgroundColor: 'white', // This sets the background color of the modal
                    border: '1px solid #ccc', // This sets the border of the modal
                    borderRadius: '20px', // This makes the borders round
                    padding: '20px', // This adds some padding inside the modal
                    }
                }}
                >
                <div>
                    <h2>{selectedEvent?.title}</h2>
                    <p>{selectedEvent?.desc}</p>
                </div>
                <div className='eventButtons'>
                    <button className='update' onClick={(e) => updateEvents(e, selectedEvent)}>Update</button>
                    <button className='delete' onClick={(e) => updateEvents(e)}>Delete</button>
                    <button className='close' onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}