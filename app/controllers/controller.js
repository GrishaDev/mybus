const ScheduleService = require('../service/scheduleService');
const Methods = require('../helpers/methods');

class Controller {

    static async getBusInfo(station = 33359, bus = 171, res) {
        const userData = await Methods.busArrivalList(station, bus);
        res.json(userData || []);
    }

    static async getSchedules(res) {
        res.json(await ScheduleService.viewSchedules() || []);
    }

    static async getSchedule(id, res) {
        res.json(await ScheduleService.viewSchedule(id) || []);
    }

    static async addSchedule(body, res) {
        await ScheduleService.addSchedule(body);
        res.json('Added new schedule');
    }

    static async updateSchedule(id, body, res) {
        await ScheduleService.updateSchedule(id, body);
        res.json('Updated this schedule.');
    }

    static async deleteSchedule(id, res) {
        await ScheduleService.deleteSchedule(id);
        res.json('Deleted this schedule.');
    }
}

module.exports = Controller;