const schedule = require('node-schedule');
const HelperMethods = require('../helpers/methods');
const Notification = require('../helpers/notification');
// const { ServerError } = require('../helpers/utils/error');
// const ScheduleModel = require('../controllers/scheduleSchema');
// const shortid = require('shortid');

// let schedules = [];
// let id = 0;

const magicMinutes = 5;
const requestFreq = 5000;
const requestTries = 10;
const advanced = false;

const createSchedule = (id, rule, station, bus, mail) => {
    console.log(rule);
    // rule = { hour: rule.hour || 0, minute: rule.minute || 0, second: rule.second || 0};
    const job = schedule.scheduleJob(id, rule, async () => {
        console.log("job started");
        let notificationMessage = {title: "hey", message: "nothing"};
        let arrivalTimes;

        if(advanced) 
            arrivalTimes = await busWaiter(station,bus).catch(err=> console.log("hello?"));
        else 
            arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));
        
        if(!arrivalTimes) {
            notificationMessage.title = `No upcoming buses..`;
        }

        notificationMessage.title = `${bus} coming in ${arrivalTimes[0]} minutes, prepare!`;
        notificationMessage.message = `Upcoming arrival list of ${bus}: ${JSON.stringify(arrivalTimes)}`;

        Notification.sendMail(mail, notificationMessage)
    });
    if(!job) console.log(`Schedule ${id} failed running`);
}

const cancelSchedule = (id) => {
    schedule.cancelJob(id);
}

const initSchedules = async (dbschedules) => {
    for(let {_id, rule, station, bus, mail} of dbschedules) {
        createSchedule(_id, rule.toObject(), station, bus, mail);
    }
    console.log("Schedules running.");
}

const busWaiter = (station, bus) => {
    return new Promise((resolve, reject)=> {
        let tries = 0;
        const monitor = setInterval(async ()=> {
            tries++;
            if(tries > requestTries){
                reject();
                clearInterval(monitor);
                return;
            } 
            arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));
            if(!arrivalTimes){ 
                return;
            }
            if(arrivalTimes[0] == magicMinutes) {
                clearInterval(monitor);
                resolve(arrivalTimes);
                return;
            }
        }, requestFreq);
    })
}

module.exports = { initSchedules, createSchedule, cancelSchedule};
