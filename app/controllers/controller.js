const { initSchedules, createSchedule, cancelSchedule } = require('../service/scheduleService');
const { ServerError } = require('../helpers/utils/error');
const ScheduleModel = require('./scheduleSchema');
const HelperMethods = require('../helpers/methods');
const shortid = require('shortid');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// get all schedules from db and start them(happens on start once)
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

    static async getSchedulesByMail(mail, res) {
        const dbschedules = await ScheduleModel.find({mail: mail});
        if(!dbschedules) throw new ServerError(404, 'Nothing');
        res.json(dbschedules);
    }

    static async getSchedule(res) {
        const schedule = await ScheduleModel.find({});
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

    static async login(data, res) {
        const { mail } = data;
        const token = jwt.sign({
            mail: `${mail}`,
            roles: ['user'] 
        }, SECRET, { expiresIn: "1d" });
        res.json(token);
    }

    static async waw(data, res) {
        const { token } = data;
        jwt.verify(token, SECRET, (err, payload)=> {
            if(err) throw new ServerError(401, 'bad');
            res.json('you can see secret message');
        });
    }
}

module.exports = Controller;