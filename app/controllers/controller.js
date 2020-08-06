const { initSchedules, createSchedule, cancelSchedule } = require('../service/scheduleService');
const { ServerError } = require('../helpers/utils/error');
const ScheduleModel = require('./scheduleSchema');
const HelperMethods = require('../helpers/methods');
const shortid = require('shortid');

// get all schedules from db and start them(happens on start once)
(async()=> {
    const dbschedules = await ScheduleModel.find({});
    // for(const schedule of dbschedules) {
    //     // if(schedule.scheduleTrigger) {
    //         const rule = schedule.rule;

    //         const result = await ScheduleModel.findByIdAndUpdate(schedule.id, {rule: {hour: rule.hour, minute: rule.minute}}, {new: true}).catch(err=> console.log(err));
    //         console.log(result);
    //     // }
    // }

   

    initSchedules(dbschedules);
})();


class Controller {

    static async getBusInfo(req, res) {
        const { station, bus } = req.params;
        let userData = await HelperMethods.busArrivalList(station, bus);
        res.json(userData || []);
    }

    static async getSchedules(req, res) {
        const dbschedules = await ScheduleModel.find({});
        if(!dbschedules) throw new ServerError(404, 'No items at all!');
        res.json(dbschedules);
    }

    static async getSchedulesByMail(req, res) {
        const dbschedules = await ScheduleModel.find({mail: req.params.mail});
        if(!dbschedules) throw new ServerError(404, 'Nothing');
        res.json(dbschedules);
    }

    static async getSchedule(req, res) {
        const schedule = await ScheduleModel.findById(req.params.id);
        if(!schedule) throw new ServerError(404, 'This item not found');
        res.json(schedule);
    }

    static async addSchedule(req, res) {
        const data = req.body;
        const _id = shortid.generate();
        // createSchedule({...data, _id});
        let Schedule = new ScheduleModel({...data, _id})
        const result = await Schedule.save().catch(err=> console.log(err));
        if(!result) throw new ServerError(500, 'Failed adding new schedule');
        createSchedule(result.toObject());
        res.json(result);
    }

    static async updateSchedule(req, res) {
        const id = req.params.id;
        const data = req.body;
        const { payload } = res.locals;
        const dbschedule = await ScheduleModel.findById(id);
        if(payload && (dbschedule.mail != payload.mail)) throw new ServerError(401, 'Unauthorized');
        if(!dbschedule) throw new ServerError(404, 'This item not found');
        const result = await ScheduleModel.findByIdAndUpdate(id, data, {new: true}).catch(err=> console.log(err));
        if(!result) throw new ServerError(500, 'Failed updating new schedule');
        cancelSchedule(id);
        createSchedule(result.toObject());
        res.json(result);
    }

    static async deleteSchedule(req, res) {
        const id = req.params.id;
        const { payload } = res.locals;
        const dbschedule = await ScheduleModel.findById(id);
        if(payload && (dbschedule.mail != payload.mail)) throw new ServerError(401, 'Unauthorized');
        const result = await ScheduleModel.findByIdAndRemove(id).catch(err => console.log(err));
        if(!result) throw new ServerError(404, 'This item not found');
        cancelSchedule(id);
        res.json('Deleted this schedule.');
    }

    static async login(req, res) {
        res.json(res.locals.token); // its getting the token from login middleware in auth file.
    }
}

module.exports = Controller;