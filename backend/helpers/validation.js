const User= require('../models/userModel');



exports.validateEmail = (email) => {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return String(email).toLowerCase().match(re);  
}

exports.validateLength =  (text, minLength, maxLength) => {
    if (text.length < minLength || text.length > maxLength) {
        return false;
    }else{
        return true;
    }
}


exports.validateUsername = async(username)=>{
    username = String(username).toLowerCase();
    let isTrue=false;
    do{
        let user= await User.findOne({username})

        if (user){
            username = (username + (+new Date()+Math.random()).toString().substring(0, 1)).toLowerCase();
            isTrue =true;
        }else{
            isTrue= false;
        }


    }while(isTrue);
    
        return username;
}