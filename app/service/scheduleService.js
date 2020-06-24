const schedule = require('node-schedule');
const Methods = require('../helpers/methods');
const Notification = require('../helpers/notification');
const { ServerError } = require('../helpers/utils/error');
const ScheduleModel = require('./scheduleSchema');
const shortid = require('shortid');

// let schedules = [];
// let id = 0;

const createSchedule = (id, rule, station, bus, mail) => {
    const a = schedule.scheduleJob(id, rule, async () => {
        let userData = await Methods.busArrivalList(station, bus).catch(err => console.log(err));
        if(!userData) userData[0] = "No bus for you";
        Notification.sendMail(mail, userData)
    });
    if(!a) console.log(`Schedule ${id} failed running`);
}

const initSchedules = async () => {
    let dbschedules = await ScheduleModel.find({});
    for(let {_id, rule, station, bus, mail} of dbschedules) {
        createSchedule(_id, rule.toObject(), station, bus, mail);
    }
    console.log("Schedules running.");
}

initSchedules();

class ScheduleService {
    static async viewSchedules () {
        const dbschedules = await ScheduleModel.find({});
        if(!dbschedules) throw new ServerError(404, 'No items at all!');
        return dbschedules;
    } 

    static async viewSchedule (id) {
        const schedule = await ScheduleModel.findById(id);
        if(!schedule) throw new ServerError(404, 'This item not found');
        return schedule;
    } 

    static async addSchedule (data) {
        const _id = shortid.generate();
        const { rule, station, bus, mail } = data;
        createSchedule(_id, rule, station, bus, mail);
        let Schedule = new ScheduleModel({ _id, rule, mail, station, bus })
        const result = await Schedule.save().catch(err=> console.log(err));
    }

    static async updateSchedule (id, data) {
        const dbschedule = await ScheduleModel.findById(id);
        if(!dbschedule) throw new ServerError(404, 'This item not found');
        schedule.cancelJob(id);
        const result = await ScheduleModel.findByIdAndUpdate(id, data).catch(err=> console.log(err));
        const { rule, station, bus, mail } = result;
        createSchedule(id, rule.toObject(), station, bus, mail);
    } 

    static async deleteSchedule (id) {
        const result = await ScheduleModel.findByIdAndRemove(id).catch(err => console.log(err));
        if(!result) throw new ServerError(404, 'This item not found');
    } 
}


module.exports = ScheduleService;