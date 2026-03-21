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
        html: ``
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