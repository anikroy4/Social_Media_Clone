const nodemailer= require('nodemailer');
const {google}= require('googleapis');

const {OAuth2}= google.auth;
const oauth_link = 'https://developers.google.com/oauthplayground'; 
const {EMAIL,MAILING_ID,MAILING_SECRET,MAILING_REFRESH} = process.env;

const auth= new OAuth2(
    MAILING_ID,
    MAILING_SECRET,
    MAILING_REFRESH,
    oauth_link
);

exports.sendEmail = (email,name, url) => {
    auth.setCredentials({
        refresh_token: MAILING_REFRESH
    }); 
    const accessToken = auth.getAccessToken()

    const transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: { 
                type: "OAuth2",
                user: EMAIL,
                clientId: MAILING_ID,
                clientSecret: MAILING_SECRET,
                refreshToken: MAILING_REFRESH,
                accessToken
            }
        }
    )

    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: 'AlAP Account Activation',  
        html: `
        <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to AlAP.</h2>
        <p>Hello ${name},</p>
        <p>Congratulations! You're almost set to start using AlAP.
            Just click the button below to validate your email address.
        </p>
        <a href=${url} style="display:inline-block; margin-top: 16px; padding: 12px 20px; background:#0d9488; color:#fff; text-decoration:none; border-radius:6px; font-weight:600;">
            Activate Account
        </a>
        </div>`
    };
    transporter.sendMail(mailOptions, (error, res) => {
        if (error) {
            // console.error('Error sending email:', error);
            return error;
        } else {
            // console.log('Email sent successfully:', info.response);
            return res;
        }
    });
}   