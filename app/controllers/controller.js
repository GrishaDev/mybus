const ScheduleService = require('../service/scheduleService');
const Methods = require('../helpers/methods');

class Controller {

    static async getBusInfo(station = 33359, bus = 171, res) {
        const userData = await Methods.busArrivalList(station, bus);
        res.json(userData || []);
    }

    static async getSchedules(res) {
        res.json(ScheduleService.viewSchedules() || []);
    }

    static async getSchedule(id, res) {
        res.json(ScheduleService.viewSchedule(id) || []);
    }

    static async addSchedule(body, res) {
        const hour = body.hour || '*';
        const minute = body.minute || '*';
        const second = body.second || 5;
        const {mail, station, bus } =  body;
        const rule = `${second} ${minute} ${hour} * * *`;
        ScheduleService.addSchedule(rule, mail, station, bus);
        res.json('ok');
    }

    static async updateSchedule(body, res) {
        const id = body.id;
        const theSchedule = ScheduleService.viewSchedule(id);

        const hour = body.hour || '*';
        const minute = body.minute || '*';
        const second = body.second || 5;
        const {mail, station, bus } =  body;
        const rule = `${second} ${minute} ${hour} * * *`;

        ScheduleService.updateSchedule(rule, mail, station, bus);
        res.json('ok');
    }

    static async deleteSchedule(id, res) {
        ScheduleService.deleteSchedule(id);
        res.json('ok');
    }
}

module.exports = Controller;