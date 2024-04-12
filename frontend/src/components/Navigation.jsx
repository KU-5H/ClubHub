import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';
import { userContext } from '../../context/userContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { IoCalendarOutline, IoChatboxEllipsesOutline, IoLogInOutline, IoCreateOutline, IoExitOutline   } from "react-icons/io5";
import { MdOutlineAnnouncement } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
import { CiMoneyCheck1 } from "react-icons/ci";


Modal.setAppElement('#root'); // replace '#root' with the id of your app's root element

export default function Navigation() {
  const nav = useNavigate();
  const { user, logout } = useContext(userContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      logout();
      setModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className='nav-bar'>
      <h1 className='logo'>ClubHub</h1>
      <ul>
        <Link to="/home">{user && <li><MdOutlineAnnouncement /> Announcements</li>}</Link>
        <Link to="/calender">{user && <li><IoCalendarOutline /> Calender</li>}</Link>
        <Link to="/">{!user && <li><RiQuestionnaireLine /> About</li>}</Link>
        <Link to="/communication">{user && <li> <IoChatboxEllipsesOutline /> Communication</li>}</Link>
        <Link to="/finances">{user && <li><CiMoneyCheck1 /> Finances</li>}</Link>
        <Link to="/login">{!user && <li><IoLogInOutline /> Login</li>}</Link>
        <Link to="/register">{!user && <li><IoCreateOutline /> Register</li>}</Link>
        {user && <li onClick={() => setModalIsOpen(true)}> <IoExitOutline /> Logout</li>}
      </ul>
      <Modal className={'modal'}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Confirm Logout"
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
          <h2>Confirm Logout</h2>
          <p>Are you sure you want to log out?</p>
        </div>
        <div className='modal-button'>
          <button className='cancel' onClick={() => setModalIsOpen(false)}>Cancel</button>
          <button className='confirm' onClick={handleLogout}>Log out</button>
        </div>
      </Modal>
    </nav>
  );
}