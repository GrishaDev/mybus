const schedule = require('node-schedule');
const Methods = require('../helpers/methods');
const Notification = require('../helpers/notification');

let schedules = [];

class ScheduleService {
    static viewSchedules = () => {
        return schedules;
    } 

    static addSchedule = (id, rule, mail, station, bus) => {
        const mailSchedule =  schedule.scheduleJob(rule, async () => {
            const userData = await Methods.busArrivalList(station, bus);
            Notification.sendMail(mail, userData)
        });
        schedules.push( { id, rule, mailSchedule } );
    } 
}


module.exports = ScheduleService;