const { validateEmail } = require('../helpers/validation');
const Users = require('../models/userModel');

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
        }   = req.body;

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
         



        const newUser = await new Users({
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
        }).save();
            
        res.send(newUser);
        
    
    } catch (error) {
       
        res.status(404).json({ message: 'Can not find user' });
    }
}