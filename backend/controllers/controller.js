const User = require('../models/user');
const Announcement = require('../models/announcements')
const Finance = require('../models/finance')
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;

        if(!name) {
            return res.json({
                error: 'name is required'
            })
        };

        if(!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };

        if(!role) {
            return res.json({
                error: 'Role is required'
            })
        }

        const exist = await User.findOne({email})
        if(exist) {
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
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        const matchedPassword = await comparePassword(password, user.password)
        if(matchedPassword) {
            jwt.sign({email: user.email, id: user._id, name: user.name, role: user.role}, process.env.JWT_SECRET, {}, (error, token) => {
                if(error) throw error
                res.cookie('token', token, {httpOnly: true}).json(user)
            })
        } else {
            res.json({
                error: "Passwords don't match"
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
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (error, user) => {
            if(error) throw error
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

const addAnnouncement = async (req, res) => {
    const {title, text} = req.body;

    try {
        if (!title) {
            return res.json({
                error: "Title Needed!"
            })
        }
        if (!text)  {
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

const getFinances = async (req, res) => {
    try {
        const {mail} = req.body;
        const info = await Finance.find({ email: new RegExp('^' + mail + '$', 'i') });
        res.json(info);
    } catch (error) {
        console.log(error);
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
    getFinances
}