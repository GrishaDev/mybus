const nodemailer = require("nodemailer");
const webpush = require('web-push');

const publicVapidKey = process.env.VAPID_PUBLIC;
const privateVapidKey = process.env.VAPID_PRIVATE;

webpush.setVapidDetails(`mailto:${process.env.GMAIL_USER}`, publicVapidKey, privateVapidKey);

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
                subject: data.title,
                text: String(data.message),
                html: String(data.message),
            });
            console.log("Message sent: %s", info.messageId);
        }
        catch(err){
            console.log(err);
        }
    }

    static async sendPush(sub, data) {
        console.log("Sending push notification");
        await webpush.sendNotification(sub, JSON.stringify(data)).catch(error => console.error(`Failed sending push :: ${error.stack}`));
    }


}


module.exports = Notification;