const User = require('../models/user');
const Announcement = require('../models/announcements')
const Finance = require('../models/finance')
const Calender = require('../models/calender')
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name) {
            return res.json({
                error: 'name is required'
            })
        };

        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };

        if (!role) {
            return res.json({
                error: 'Role is required'
            })
        }

        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: 'This Email already has an account'
            })
        }

        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name, email, password: hashedPassword, role
        })

        const userFinance = await Finance.create({ //creates a finance report entry in the database
            email: email, paymentsMade: [], unpaidDebt: 0
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        }

        const matchedPassword = await comparePassword(password, user.password)
        if (matchedPassword) {
            jwt.sign({ email: user.email, id: user._id, name: user.name, role: user.role }, process.env.JWT_SECRET, {}, (error, token) => {
                if (error) throw error
                res.cookie('token', token, { httpOnly: true }).json(user)
            })
        } else {
            res.json({
                error: "Password is incorrect"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('token');
    res.end()
}

const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (error, user) => {
            if (error) throw error
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

const addAnnouncement = async (req, res) => {
    const { title, text } = req.body;

    try {
        if (!title) {
            return res.json({
                error: "Title Needed!"
            })
        }
        if (!text) {
            return res.json({
                error: "Announcement text needed!"
            })
        }
        const announcement = await Announcement.create({
            title, text
        })
        

        return res.json(announcement)
    } catch (error) {
        console.log(error)
    }
}

const getAnnouncement = async (req, res) => {
    try {
        const data = await Announcement.find({});
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

const getMemberEmails = async (req, res) => {
    try {
        const users = await User.find({ role: /^Member$/i }); //Gets a list of all the members
        const emails = users.map(user => user.email); //gets a list of all of the emails of every user in the database
        res.json(emails)
    } catch (error) {
        console.log(error)
    }
}


const getAllFinanceUsers = async (req, res) => {
    try {
        const allUsers = await Finance.find({}); //gets the a list of the the finance entries in the database
        res.json(allUsers)
    } catch (error) {
        console.log(error)
    }
}

const deleteAnnouncement = async (req, res) => {
    const data = req.body;
    try {

        if (!data._id) {
            return res.json({
                error: "No data found"
            })
        }

        const announcement = await Announcement.findOneAndDelete({_id: data._id})

        return res.json(announcement)

    } catch (error) {
        console.log(error)
    }
}

const getFinances = async (req, res) => {
    try {
        const {mail} = req.body;
        console.log(req.body)
        const info = await Finance.find({ email: new RegExp('^' + mail + '$', 'i') });
        res.json(info);
    } catch (error) {
        console.log(error)
    }
}

const addFundsToAll = async (req, res) => {
    try {
        // Parse the funds from the request body
        const funds = parseInt(req.body.amount);
        // Check if funds is a valid number
        if (!isNaN(funds)) {
            // Update all documents in the Finance collection to increment unpaidDebt by funds
            await Finance.updateMany({}, { $inc: { unpaidDebt: funds } });
            // Send a success response
            res.status(200).json({ message: 'Funds added to all accounts successfully' });
        } else {
            // If funds is not a valid number, send a bad request response
            res.status(400).json({ error: 'Invalid funds amount' });
        }
    } catch (error) {
        // If an error occurs, log it and send a server error response
        console.error('Error adding funds:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const getUserFinance = async (req, res) => {
    try {
        const { mail } = req.body;
        const user = await Finance.findOne({email: mail});
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const userPayment = async (req, res) => {
    try {
        const { mail, amount } = req.body;

        if(!amount) {
            return res.json({
                error: "Amount Needed!"
            })
        }

        if (isNaN(amount)) {
            return res.json({
                error: "Amount must be a number"
            });
        }

        const payment = await Finance.findOneAndUpdate({ email: mail }, { 
            $inc: { unpaidDebt: -amount },
            $push: { paymentsMade: amount }
        },  ); //decrements the unpaidDebt by the amount from the user identified by the email
        return res.json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const addSinglePayment = async (req, res) => {
    try {
        const { mail, amount } = req.body;

        if(!amount) {
            return res.json({
                error: "Amount Needed!"
            })
        }

        if (isNaN(amount)) {
            return res.json({
                error: "Amount must be a number"
            });
        }

        const payment = await Finance.findOneAndUpdate({ email: mail }, { 
            $inc: { unpaidDebt: +amount },
        },  ); //decrements the unpaidDebt by the amount from the user identified by the email
        return res.json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


const newCalenderEvent = async (req, res) => {
    const {title, text, startDateTime, endDateTime} = req.body;

    try {
        if (!title) {
            return res.json({
                error: "Title Needed!"
            })
        }

        if(!startDateTime) {
            return res.json({
              error: "Start date needed!"
            })
          }
      
        if(!endDateTime) {
            return res.json({
              error: "End date needed!"
            })
        }

        if(dayjs(startDateTime).isAfter(dayjs(endDateTime))) {
            return res.json({
                error: "End date must be after start date"
            })
        }

        const calender = await Calender.create({
            text, title, startDate: startDateTime, endDate: endDateTime
        })

        return res.json(calender)
    } catch (error) {
        console.log(error)
    }
}

getCalenderEvents = async (req, res) => {
    try {
        const data = await Calender.find({});
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

deleteEvent = async (req, res) => {
    try {
        const data = req.body;

        if (!data) {
            return res.json({
                error: "No data found"
            })
        } else {
            const event = await Calender.findOneAndDelete({_id: data._id})
            res.json(event)
        }
    } catch (error) {
        console.log(error)
    }
}

updateEvent = async (req, res) => {
    const {title, text, start, end, _id} = req.body;

    try {
        if (!title) {
            return res.json({
                error: "Title Needed!"
            })
        }

        if(!start) {
            return res.json({
              error: "Start date needed!"
            })
          }
      
        if(!end) {
            return res.json({
              error: "End date needed!"
            })
        }

        if(dayjs(start).isAfter(dayjs(end))) {
            return res.json({
                error: "End date must be after start date"
            })
        }

        const event = await Calender.findOneAndUpdate({_id: _id}, {
            text, title, startDate: start, endDate: end
        })

        return res.json(event)
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    addAnnouncement,
    getAnnouncement,
    logoutUser,
    getMemberEmails,
    getAllFinanceUsers,
    addFundsToAll,
    getUserFinance,
    userPayment,
    getFinances,
    newCalenderEvent,
    getCalenderEvents,
    deleteEvent,
    updateEvent,
    deleteAnnouncement,
    addSinglePayment,
}