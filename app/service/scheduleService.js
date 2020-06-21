const schedule = require('node-schedule');
const Methods = require('../helpers/methods');
const Notification = require('../helpers/notification');

let schedules = [];
let id = 0;

class ScheduleService {
    static viewSchedules () {
        return schedules;
    } 

    static viewSchedule (id) {
        return schedules.find(obj => obj.id === id);
    } 

    static addSchedule  (rule, mail, station, bus) {
        const mailSchedule = createSchedule(id++, rule, station, bus, mail);
        schedules.push( { id, rule, mailSchedule, mail, station, bus } );
    }

    static updateSchedule (id, data) {
        let current = schedules.findIndex(obj => obj.id === id);
        schedule.cancelJob(String(schedules[current].id));
        const { station, bus, mail, rule } = data;
        const mailSchedule = createSchedule(current, rule, station, bus, mail);
        schedules[current] = { current, rule, mailSchedule, mail, station, bus };
    } 

    static deleteSchedule (id) {
        let current = schedules.findIndex(obj => obj.id === id);
        schedule.cancelJob(String(schedules[current].id));
        schedules.splice(current, 1);
    } 
}

const createSchedule = (id, rule, station, bus, mail) => {
    return mailSchedule =  schedule.scheduleJob(String(id), rule, async () => {
        const userData = await Methods.busArrivalList(station, bus).catch(err => console.log(err));
        Notification.sendMail(mail, userData)
    });
}

module.exports = ScheduleService;