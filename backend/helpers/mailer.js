const nodemailer= require('nodemailer');
const {google}= require('googleapis');
const {OAuth2}= google.auth;
const auth_link = 'https://developers.google.com/oauthplayground'; 
const {EMAIL,MAILING_ID,MAILING_SECRET,MAILING_REFRESH} = process.env;

const auth= new OAuth2(
    MAILING_ID,
    MAILING_REFRESH,
    MAILING_SECRET,
    auth_link
)

exports.sendEmail = (email,name, url) => {
    auth.setCredentials({
        refresh_token: MAILING_REFRESH
    }); 
    const accessToken = auth.getAccessToken()

    const stmp = nodemailer.createTransport({
        service: 'gmail',
        auth: { 
            type: 'OAuth2',
            user: EMAIL,
            clientId: MAILING_ID,
            clientSecret: MAILING_SECRET,
            refreshToken: MAILING_REFRESH,
            accessToken: accessToken 
        }
    });

    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: 'AlAP Account Activation',
        html: `<div style="padding:50px;text-align:center;background-color:#f2f2f2;border:1px solid #ccc;border-radius:10px;font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;box-shadow:0 4px 8px rgba(0,0,0,0.1);margin-top:250px;"><h1 style="color:#333;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">Verify your email</h1><p style="color:#333;margin-bottom:20px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:16px;" >Hello ${name}, please click the link below to verify your email address</p><a href=${url} style="display:inline-block;padding:10px 20px;background-color:#007bff;color:white;text-decoration:none;border-radius:5px;box-shadow:0 5px 10px rgba(0,0,0,0.1);" onMouseOver="this.style.backgroundColor='#0056b3'; this.style.boxShadow='none';" onMouseOut="this.style.backgroundColor='#007bff'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.1)';" >Verify Email</a></div>`
    };
    stmp.sendMail(mailOptions, (error, res) => {
        if (error) {
            // console.error('Error sending email:', error);
            return error;
        } else {
            // console.log('Email sent successfully:', info.response);
            return res;
        }
    });
}   