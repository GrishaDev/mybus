const { initSchedules, createSchedule, cancelSchedule } = require('../service/scheduleService');
const { ServerError } = require('../helpers/utils/error');
const ScheduleModel = require('./scheduleSchema');
const HelperMethods = require('../helpers/methods');
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
        const dbschedules = await ScheduleModel.find({});
        if(!dbschedules) throw new ServerError(404, 'No items at all!');
        res.json(dbschedules);
    }

    static async getSchedule(id, res) {
        const schedule = await ScheduleModel.findById(id);
        if(!schedule) throw new ServerError(404, 'This item not found');
        res.json(schedule);
    }

    static async addSchedule(data, res) {
        const _id = shortid.generate();
        createSchedule({...data, _id});
        let Schedule = new ScheduleModel({...data, _id})
        const result = await Schedule.save().catch(err=> console.log(err));
        if(!result) throw new ServerError(500, 'Failed adding new schedule');
        res.json(result);
    }

    static async updateSchedule(id, data, res) {
        const dbschedule = await ScheduleModel.findById(id);
        if(!dbschedule) throw new ServerError(404, 'This item not found');
        const result = await ScheduleModel.findByIdAndUpdate(id, data, {new: true}).catch(err=> console.log(err));
        if(!result) throw new ServerError(500, 'Failed updating new schedule');
        cancelSchedule(id);
        createSchedule(result.toObject());
        res.json(result);
    }

    static async deleteSchedule(id, res) {
        const result = await ScheduleModel.findByIdAndRemove(id).catch(err => console.log(err));
        if(!result) throw new ServerError(404, 'This item not found');
        res.json('Deleted this schedule.');
    }
}

module.exports = Controller;