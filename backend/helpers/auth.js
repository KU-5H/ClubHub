const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (error, salt) => {
            if(error) {
                reject(error)
            }
            bcrypt.hash(password, salt, (error, hash) => {
                if(error) {
                    reject(error)
                }
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}