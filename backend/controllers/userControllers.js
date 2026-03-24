const { validateEmail, validateLength, validateUsername } = require('../helpers/validation');
const { createToken } = require('../helpers/token');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
            email,
            username: newUsername,
            password: encryptedPassword,
            bMonth,
            bYear,
            bDay,
            gender,
            verified
        }).save();

        const emailToken= createToken ({ id: newUser._id.toString() }, '30m'); 

        const url = `${process.env.BASE_URL}/activate/${emailToken}`;

        sendEmail(newUser.email, newUser.fName, url);
        
        const token = createToken({ id: newUser._id.toString() }, '7d');
       
        // res.send(newUser);
        
        res.send({
            id: newUser._id,
            username: newUser.username,
            profilePicture: newUser.profilePicture,
            fName: newUser.fName,
            lName: newUser.lName,

            // coverPicture: newUser.coverPicture,
            token: token,
            verified: newUser.verified,
            message: 'Registration Successful! Please check email to activate your account.'
        });


            
        
        
    
    } catch (error) {
       
    res.status(404).json({ message: 'Can not find user' });
    }
}

exports.verifiedUser = async (req, res) => {
    try {
        const { token } = req.body;
        // console.log(token);
        const user= jwt.verify(token, process.env.ACCESS_TOKEN);
        const check = await Users.findById(user.id);
        if(check.verified===true){
            return res.status(400).json({
                message: 'This email is already verified'
            });
        }
       else{
        await Users.findByIdAndUpdate(user.id, { verified: true })
         return res.status(200).json({
            message: 'Account verified successfully.'
        });
       }

        
        // const user = await Users.findOne({ _id: token.id });


    }catch (error) {
        res.status(404).json({ message: error.message });
    }   

}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(400).json(
                {
                    message: 'User not found'
                }
            );
        }

        const checked = await bcrypt.compare(password, user.password);

        if (!checked) {
            return res.status(400).json({ 
                message: 'Invalid Password. Please try again.'
            });
        }

        const token = createToken({ id: user._id.toString() }, '7d');

        res.send({
            id: user._id,
            username: user.username,
            profilePicture: user.profilePicture,
            fName: user.fName,
            lName: user.lName,
            token: token,
            verified: user.verified,
            message: 'Login successful.'
        });

    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }

}
   

