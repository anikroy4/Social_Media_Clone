const { validateEmail, validateLength, validateUsername } = require('../helpers/validation');
const { createToken } = require('../helpers/token');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const { sendEmail } = require('../helpers/mailer');

exports.user= async (req, res) => {
    try {
        const{
            fName,
            lName,
            username,
            email,
            password,
            bMonth,
            bYear,
            bDay,
            gender,
            verified      
        } = req.body;

        if(!validateEmail(email)){
            return res.status(400).json({
                message: 'Invalid email' 
            });
        }
        
       const checkMail = await Users.findOne({ email })
        
        if(checkMail){
            return res.status(400).json({
                message: 'This email already exists'
            });
        }
        if(!validateLength(fName, 3, 15)){
            return res.status(400).json({
                message: 'First name must be between 3 and 15 characters'
            });
        }
        if(!validateLength(lName, 3, 15)){
            return res.status(400).json({
                message: 'Last name must be between 3 and 15 characters'
            });
        }
        if(!validateLength(password, 8, 32)){
            return res.status(400).json({
                message: 'Password must be between 8 and 32 characters'
            });
        }   
            //bcrypt password
            const encryptedPassword = await bcrypt.hash(password, 12);
            //console.log(encryptedPassword);


            //validate username
            let tempUsername = fName + lName;
            let newUsername = await validateUsername(tempUsername);


        const newUser = await new Users({
            fName,
            lName,
            username: newUsername,
            email,
            password: encryptedPassword,
            bMonth,
            bYear,
            bDay,
            gender,
            verified
        }).save();

        const token= createToken({ id: newUser._id.toString() }, '7d'); 
        const url = `${process.env.BASE_URL}/activate/${token}`
        
         sendEmail(email, newUser.fName, url);
        
        
            
        res.send(newUser);
        
    
    } catch (error) {
       
        res.status(404).json({ message: 'Can not find user' });
    }
}


