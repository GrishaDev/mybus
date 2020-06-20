const nodemailer = require("nodemailer");

class Notification {

    static async sendMail(adress, data) {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, 
                pass: process.env.GMAIL_PASS, 
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"myBus service" <spicylemon@gmail.com>', // sender address
            to: adress, // list of receivers
            subject: `Your bus is coming in ${data[0]}!`, // Subject line
            text: String(data), // plain text body
            html: String(data), // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
}


module.exports = Notification;