const nodemailer = require("nodemailer");

class Notification {

    static async sendMail(adress, data) {
        try {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_USER, 
                    pass: process.env.GMAIL_PASS, 
                },
            });

            let info = await transporter.sendMail({
                from: `"myBus service" <${process.env.GMAIL_USER}>`,
                to: adress,
                subject: `Your bus is coming in ${data[0]}!`,
                text: String(data),
                html: String(data),
            });
            console.log("Message sent: %s", info.messageId);
        }
        catch(err){
            console.log(err);
        }
    }
}


module.exports = Notification;