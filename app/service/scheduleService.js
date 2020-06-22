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
        return schedules.find(obj => obj.id === parseInt(id));
    } 

    static addSchedule (data) {
        const { mail, station, bus } = data;
        const rule = { ...data.hour && { hour: data.hour }, ...data.minute && { minute: data.minute }, ...data.second && { second: data.second }};

        const mailSchedule = createSchedule(id, rule, station, bus, mail);
        schedules.push( { id: id++, rule, mailSchedule, mail, station, bus } );
    }

    static updateSchedule (id, data) {
        let current = schedules.findIndex(obj => obj.id === parseInt(id));
        schedule.cancelJob(String(schedules[current].id));

        const rule = { ...data.hour && { hour: data.hour }, ...data.minute && { minute: data.minute }, ...data.second && { second: data.second }};
        const newdata = { ...data.mail && { mail: data.mail },
                          ...data.station && { station: data.station },
                          ...data.bus && { bus: data.bus }, rule };
        const newobj = { ...schedules[current], ...newdata};

        const mailSchedule = createSchedule(current, newobj.rule, newobj.station, newobj.bus, newobj.mail);
        schedules[current] = { ...newobj, mailSchedule };
    } 

    static deleteSchedule (id) {
        let current = schedules.findIndex(obj => obj.id === parseInt(id));
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