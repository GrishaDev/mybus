const schedule = require('node-schedule');
const HelperMethods = require('../helpers/methods');
const Notification = require('./notification');
const subtractMinutes = require('../helpers/utils/scheduleTimeConverter')
const { dateAddMinutes, getOptimalTime } = require('../helpers/utils/dateMethods');

let schedulesToStopInstantly = [];
const WAIT_BETWEEN_CHECKS = 60000;
const WAIT_BETWEEN_NOTIFICATES = 300000;

const IS_DEPART = true; // true always for now

// creates a node schedule
const createSchedule = (data) => {
    let { _id, rule, station, bus, mail, scheduleTrigger, times, webPushSub, paused } = data;
    // if(rule.dayOfWeek.length === 0) delete rule.dayOfWeek;
    if(IS_DEPART && scheduleTrigger) rule = subtractMinutes(rule, scheduleTrigger.max);

    const job = schedule.scheduleJob(_id, rule, async () => 
        executeSchedule(_id, station, bus, mail, scheduleTrigger, times, webPushSub, paused).catch(err=> `job failed => ${err}`));
    if(!job) console.log(`Schedule ${_id} failed running`);
}

const cancelSchedule = (id) => {
    schedule.cancelJob(id);
}

// starts all node schedules on start.
const initSchedules = async (dbschedules) => {
    for(const schedule of dbschedules) {
        createSchedule(schedule.toObject());
    }
    console.log("Schedules running.");
}

const stopCurrentSchedle = (id) => {
    if(schedulesToStopInstantly.includes(id)) return;
    schedulesToStopInstantly.push(id);
}

// const busWaiterOld = (station, bus, scheduleTrigger) => {
//     return new Promise((resolve, reject)=> {
//         let tries = 0;
//         const monitor = setInterval(async () => {
//             if (tries++ > requestTries) {
//                 reject();
//                 clearInterval(monitor);
//                 return;
//             } 
//             arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));
//             if (!arrivalTimes) return;

//             if (arrivalTimes[0] <= scheduleTrigger) {
//                 clearInterval(monitor);
//                 resolve(arrivalTimes);
//                 return;
//             }
//         }, requestFreq);
//     })
// }

// Waits for bus to appear
const busWaiter = async (rule, station, bus, scheduleTrigger) => {

    const max = scheduleTrigger.max;
    let waiting = true;

    while(waiting) {
        arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));
        let timeNow = new Date(); // 9:00
        const timeWithMax = dateAddMinutes(timeNow, max);
        if(timeWithMax > rule) {
            waiting = false;
            break;
        }

        const highestArrivalTime = Math.max(...arrivalTimes);  // 2, 5, 11
        let timeWithArrival = dateAddMinutes(timeNow, highestArrivalTime); // 9:11
            
        if(timeWithArrival < rule) await sleep(highestArrivalTime-max); 
        else {
            waiting = false;
            const lastSleep = getOptimalTime(arrivalTimes, rule)
            await sleep(lastSleep-max-5);
        } 
    }
    return await preciseBusWaiter();

}


const preciseBusWaiter = async () => {
    for(let not_i = 0; not_i < 20; not_i++) {
        arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));
        if (!arrivalTimes) continue;

        const max = scheduleTrigger.max;
        const min = scheduleTrigger.min;

        arrivalTimes.filter((time)=> time <= max && time >= min);

        if(arrivalTimes) {
            return arrivalTimes.sort();
        }

        // if(arrivalTimes.some((time)=> time <= max && time >= min)) {
        //     return arrivalTimes;
        // }

        // if (arrivalTimes[0] <= scheduleTrigger.max && arrivalTimes[0] >= scheduleTrigger.min) {
        //     return arrivalTimes;
        // }
        await sleep(WAIT_BETWEEN_CHECKS);
    }
    return;
}
const sleep = (howlong) => new Promise(resolve=> setTimeout(resolve, howlong));

// Ran once the node schedule is activated.
const executeSchedule = async (_id, station, bus, mail, scheduleTrigger, times, webPushSub, paused ) => {
    if(paused) { console.log('job is paused so exiting'); return; }

    console.log("job started");
    let notificationMessage = {title: "hey", message: "nothing"};
    let arrivalTimes;

    for (let not_i = 0; not_i < times; not_i++) {
        console.log("checking..");
        if(scheduleTrigger) 
            arrivalTimes = await busWaiter(station, bus, scheduleTrigger).catch(err=> console.log("rejected"));
        else 
            arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));

        if(schedulesToStopInstantly.includes(_id)) {
            schedulesToStopInstantly.splice(schedulesToStopInstantly.indexOf(_id), 1);
            console.log("Schedule canceled, exiting.");
            return;
        }

        if(!arrivalTimes) {
            notificationMessage.title = `No upcoming buses..`;
        }
        else {
            notificationMessage.title = `${bus} coming in ${arrivalTimes[0]} minutes, prepare!`;
            notificationMessage.message = `Upcoming arrival list of ${bus}: ${JSON.stringify(arrivalTimes)}`;
        }

        if(paused) { console.log('job is paused so exiting'); return; } // done in case schedule already running when paused

        if(webPushSub) Notification.sendPush(webPushSub, notificationMessage);
        else Notification.sendMail(mail, notificationMessage);
        if(times > 1) {
            console.log("waiting 3minutes..");
            await sleep(WAIT_BETWEEN_NOTIFICATES);
        }
    }
}

module.exports = { initSchedules, createSchedule, cancelSchedule, stopCurrentSchedle};
