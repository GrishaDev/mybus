const schedule = require('node-schedule');
const HelperMethods = require('../helpers/methods');
const Notification = require('./notification');


const WAIT_BETWEEN_CHECKS = 60000;
const WAIT_BETWEEN_NOTIFICATES = 180000;

// creates a node schedule
const createSchedule = (data) => {
    const { _id, rule, station, bus, mail, scheduleTrigger, times, webPushSub } = data;
    const job = schedule.scheduleJob(_id, rule, async () => 
        executeSchedule(station, bus, mail, scheduleTrigger, times, webPushSub).catch(err=> `job failed => ${err}`));
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
const busWaiter = async (station, bus, scheduleTrigger) => {
    for(let not_i = 0; not_i < 10; not_i++) {
        arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));
        if (!arrivalTimes) continue;

        if (arrivalTimes[0] <= scheduleTrigger) {
            return arrivalTimes;
        }
        await sleep(WAIT_BETWEEN_CHECKS);
    }
    return;
}

const sleep = (howlong) => new Promise(resolve=> setTimeout(resolve, howlong));

// Ran once the node schedule is activated.
const executeSchedule = async ( station, bus, mail, scheduleTrigger, times, webPushSub ) => {
    console.log("job started");
    let notificationMessage = {title: "hey", message: "nothing"};
    let arrivalTimes;

    for (let not_i = 0; not_i < times; not_i++) {
        console.log("checking..");
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
        if(webPushSub) Notification.sendPush(webPushSub, notificationMessage);
        else Notification.sendMail(mail, notificationMessage);
        if(times > 1) {
            console.log("waiting 3minutes..");
            await sleep(WAIT_BETWEEN_NOTIFICATES);
        }
    }
}

module.exports = { initSchedules, createSchedule, cancelSchedule};
