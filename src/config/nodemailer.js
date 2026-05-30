const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,         // Hostinger के लिए पोर्ट 465 सबसे बेस्ट और सिक्योर है
    secure: true,      // पोर्ट 465 के लिए इसे true रखना ज़रूरी है
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS    
    },
    tls: {
        // यह लाइन Hostinger सर्वर और Google के बीच अनधिकृत एरर (SSL Certificate issue) को रोकती है
        rejectUnauthorized: false 
    }
})

module.exports = transporter
