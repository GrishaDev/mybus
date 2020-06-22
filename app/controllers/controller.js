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
        ScheduleService.addSchedule(body);
        res.json('ok');
    }

    static async updateSchedule(id, body, res) {
        ScheduleService.updateSchedule(id, body);
        res.json('ok');
    }

    static async deleteSchedule(id, res) {
        ScheduleService.deleteSchedule(id);
        res.json('ok');
    }
}

module.exports = Controller;