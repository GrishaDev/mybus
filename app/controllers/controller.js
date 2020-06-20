const ScheduleService = require('../service/scheduleService');
const Methods = require('../helpers/methods');

class Controller {

    static async getBusInfo(station = 33359, bus = 171, res) {
        const userData = await Methods.busArrivalList(station, bus);
        res.json(userData || []);
    }

    static async viewSchedules(res, next) {
        res.json(ScheduleService.viewSchedules() || []);
    }

    static async addSchedule(body, res) {
        const hour = body.hour || '*';
        const minute = body.minute || '*';
        const second = body.second || 5;
        const { id, mail, station, bus } =  body;
        const rule = `${second} ${minute} ${hour} * * *`;
        ScheduleService.addSchedule(id, rule, mail, station, bus);
        res.json('ok');
    }
}


module.exports = Controller;