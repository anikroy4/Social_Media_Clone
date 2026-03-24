const jwt= require('jsonwebtoken');

exports.createToken = (user, expiredIn) => {
    
    return jwt.sign(user, process.env.ACCESS_TOKEN, { 
        expiresIn: expiredIn 
    });
}