
function sendMail(){
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'durgeshv@gmail.com',
        pass: 'Hsegrud+33'
    }
    });

    var mailOptions = {
    from: 'durgeshv@gmail.com',
    to: 'durgeshv@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

}
