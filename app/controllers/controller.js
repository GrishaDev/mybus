const { initSchedules, createSchedule, cancelSchedule } = require('../service/scheduleService');
const { ServerError } = require('../helpers/utils/error');
const ScheduleModel = require('./scheduleSchema');
const HelperMethods = require('../helpers/methods');
// const ApiSources = require('../helpers/apiSources');
// const busObjParse = require('../helpers/utils/busApiParser');
const shortid = require('shortid');

(async()=> {
    const dbschedules = await ScheduleModel.find({});
    initSchedules(dbschedules);
})();


class Controller {

    static async getBusInfo(station = 33359, bus = 171, res) {
        let userData = await HelperMethods.busArrivalList(station, bus);
        res.json(userData || []);
    }

    static async getSchedules(res) {
        // res.json(await ScheduleService.viewSchedules() || []);

        const dbschedules = await ScheduleModel.find({});
        if(!dbschedules) throw new ServerError(404, 'No items at all!');
        res.json(dbschedules);
    }

    static async getSchedule(id, res) {
        const schedule = await ScheduleModel.findById(id);
        if(!schedule) throw new ServerError(404, 'This item not found');
        res.json(schedule);

        // res.json(await ScheduleService.viewSchedule(id) || []);
    }

    static async addSchedule(data, res) {
        const _id = shortid.generate();
        const { rule, station, bus, mail } = data;
        createSchedule(_id, rule, station, bus, mail);
        let Schedule = new ScheduleModel({ _id, rule, mail, station, bus })
        const result = await Schedule.save().catch(err=> console.log(err));
        if(!result) throw new ServerError(500, 'Failed adding new schedule');
        res.json('Added new schedule');
    }

    static async updateSchedule(id, data, res) {
        const dbschedule = await ScheduleModel.findById(id);
        if(!dbschedule) throw new ServerError(404, 'This item not found');
        const result = await ScheduleModel.findByIdAndUpdate(id, data, {new: true}).catch(err=> console.log(err));
        if(!result) throw new ServerError(500, 'Failed updating new schedule');
        cancelSchedule(id);
        const { rule, station, bus, mail } = result;
        createSchedule(id, rule.toObject(), station, bus, mail);
        res.json('Updated this schedule.');
    }

    static async deleteSchedule(id, res) {
        const result = await ScheduleModel.findByIdAndRemove(id).catch(err => console.log(err));
        if(!result) throw new ServerError(404, 'This item not found');
        res.json('Deleted this schedule.');
    }


    // static async viewSchedules () {
    //     const dbschedules = await ScheduleModel.find({});
    //     if(!dbschedules) throw new ServerError(404, 'No items at all!');
    //     return dbschedules;
    // } 

    // static async viewSchedule (id) {
    //     const schedule = await ScheduleModel.findById(id);
    //     if(!schedule) throw new ServerError(404, 'This item not found');
    //     return schedule;
    // } 

    // static async addSchedule (data) {
    //     const _id = shortid.generate();
    //     const { rule, station, bus, mail } = data;
    //     createSchedule(_id, rule, station, bus, mail);
    //     let Schedule = new ScheduleModel({ _id, rule, mail, station, bus })
    //     const result = await Schedule.save().catch(err=> console.log(err));
    // }

    // static async updateSchedule (id, data) {
    //     const dbschedule = await ScheduleModel.findById(id);
    //     if(!dbschedule) throw new ServerError(404, 'This item not found');
    //     schedule.cancelJob(id);
    //     const result = await ScheduleModel.findByIdAndUpdate(id, data).catch(err=> console.log(err));
    //     const { rule, station, bus, mail } = result;
    //     createSchedule(id, rule.toObject(), station, bus, mail);
    // } 

    // static async deleteSchedule (id) {
    //     const result = await ScheduleModel.findByIdAndRemove(id).catch(err => console.log(err));
    //     if(!result) throw new ServerError(404, 'This item not found');
    // }
}

module.exports = Controller;