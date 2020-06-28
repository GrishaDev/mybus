const schedule = require('node-schedule');
const HelperMethods = require('../helpers/methods');
const Notification = require('../helpers/notification');

// let schedules = [];
// let id = 0;

const magicMinutes = 5;
const requestFreq = 5000;
const requestTries = 100;
const advanced = false;

const createSchedule = (id, rule, station, bus, mail, scheduleTrigger) => {
    const job = schedule.scheduleJob(id, rule, async () => {
        console.log("job started");
        let notificationMessage = {title: "hey", message: "nothing"};
        let arrivalTimes;

        if(scheduleTrigger) 
            arrivalTimes = await busWaiter(station, bus, scheduleTrigger).catch(err=> console.log("rejected"));
        else 
            arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));
        
        if(!arrivalTimes) {
            notificationMessage.title = `No upcoming buses..`;
        }
        else {
            notificationMessage.title = `${bus} coming in ${arrivalTimes[0]} minutes, prepare!`;
            notificationMessage.message = `Upcoming arrival list of ${bus}: ${JSON.stringify(arrivalTimes)}`;
        }
        Notification.sendMail(mail, notificationMessage)
    });
    if(!job) console.log(`Schedule ${id} failed running`);
}

const cancelSchedule = (id) => {
    schedule.cancelJob(id);
}

const initSchedules = async (dbschedules) => {
    for(let {_id, rule, station, bus, mail, scheduleTrigger} of dbschedules) {
        createSchedule(_id, rule.toObject(), station, bus, mail, scheduleTrigger);
    }
    console.log("Schedules running.");
}

const busWaiter = (station, bus, scheduleTrigger) => {
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
            if(arrivalTimes[0] <= scheduleTrigger) {
                clearInterval(monitor);
                resolve(arrivalTimes);
                return;
            }
        }, requestFreq);
    })
}

module.exports = { initSchedules, createSchedule, cancelSchedule};
