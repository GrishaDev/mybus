const schedule = require('node-schedule');
const Methods = require('../helpers/methods');
const Notification = require('../helpers/notification');
const { ServerError } = require('../helpers/utils/error');
const ScheduleModel = require('./scheduleSchema');
const shortid = require('shortid');

let schedules = [];
let id = 0;

const createSchedule = (id, rule, station, bus, mail) => {
    console.log(rule);
    schedule.scheduleJob(id, rule, async () => {
        let userData = await Methods.busArrivalList(station, bus).catch(err => console.log(err));
        if(!userData) userData[0] = "No bus for you";
        Notification.sendMail(mail, userData)
    });
}

const initSchedules = async () => {
    let dbschedules = await ScheduleModel.find({});
    for(let {_id, rule, station, bus, mail} of dbschedules) {
        createSchedule(_id, rule.toObject(), station, bus, mail);
    }
    console.log("Schedules running.");
}

// initSchedules();

class ScheduleService {
    static async viewSchedules () {
        const dbschedules = await ScheduleModel.find({});
        return dbschedules;
        // return schedules;
    } 

    static async viewSchedule (id) {
        const schedule = await ScheduleModel.findById(id);
        return schedule;
        // return schedules.find(obj => obj.id === parseInt(id));
    } 

    static async addSchedule (data) {
        const { mail, station, bus } = data;
        const rule = { ...data.hour && { hour: data.hour }, ...data.minute && { minute: data.minute }, ...data.second && { second: data.second }};

        const _id = shortid.generate();
        createSchedule(_id, rule, station, bus, mail);

        // schedules.push( { id: id++, rule, mailSchedule, mail, station, bus } );

        let Schedule = new ScheduleModel({ _id, rule, mail, station, bus })
        await Schedule.save().catch(err=> console.log(err));
    }

    static async updateSchedule (id, data) {

        throw new ServerError(500, "WIP");

        // await ScheduleModel.findByIdAndUpdate(id, data).catch(err=> console.log(err));

        // let current = schedules.findIndex(obj => obj.id === parseInt(id));
        // if(current === -1) throw new ServerError(404, "id not found");

        // schedule.cancelJob(String(schedules[current].id));

        // const rule = { ...data.hour && { hour: data.hour }, ...data.minute && { minute: data.minute }, ...data.second && { second: data.second }};
        // const newdata = { ...data.mail && { mail: data.mail },
        //                   ...data.station && { station: data.station },
        //                   ...data.bus && { bus: data.bus }, rule };
        // const newobj = { ...schedules[current], ...newdata};

        // const mailSchedule = createSchedule(current, newobj.rule, newobj.station, newobj.bus, newobj.mail);
        // schedules[current] = { ...newobj, mailSchedule };
        // return current;
    } 

    static async deleteSchedule (id) {
        await ScheduleModel.findByIdAndRemove(id).catch(err => console.log(err));

        // let current = schedules.findIndex(obj => obj.id === parseInt(id));
        // if(current === -1) throw new ServerError(404, "id not found");

        // schedule.cancelJob(String(schedules[current].id));
        // schedules.splice(current, 1);
    } 
}


module.exports = ScheduleService;