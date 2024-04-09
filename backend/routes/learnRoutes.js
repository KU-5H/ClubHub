const express = require('express');
const router = express.Router();
const cors = require('cors')
const {test, registerUser, loginUser, logoutUser, getProfile, addAnnouncement, getAnnouncement, newCalenderEvent, getCalenderEvents, deleteEvent, updateEvent, deleteAnnouncement, getMemberEmails, getFinances} = require('../controllers/controller')

// middleware
router.use(
    cors ({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get('/profile', getProfile)
router.post('/announcement', addAnnouncement)
router.get('/announcementget', getAnnouncement)
router.get('/getMemberEmails',getMemberEmails)
router.get('/getFinances',getFinances)
router.delete('/deleteannouncement', deleteAnnouncement)
router.post('/calenderevent', newCalenderEvent)
router.get('/calender', getCalenderEvents)
router.delete('/api/deletevent', deleteEvent)
router.put('/api/updatevent', updateEvent)

module.exports = router