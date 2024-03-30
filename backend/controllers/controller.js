const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

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

        const exist = await User.findOne({email})
        if(exist) {
            return res.json({
                error: 'This Email already has an account'
            })
        }

        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name, email, password: hashedPassword
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
            res.json('passwords match')
        } else {
            res.json({
                error: "Passwords don't match"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}