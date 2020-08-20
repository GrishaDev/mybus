const schedule = require('node-schedule');
const HelperMethods = require('../helpers/methods');
const Notification = require('./notification');
const subtractMinutes = require('../helpers/utils/scheduleTimeConverter')
const { dateAddMinutes, getOptimalTime, ruleConverter } = require('../helpers/utils/dateMethods');

let schedulesToStopInstantly = [];
const WAIT_BETWEEN_CHECKS = 60000;
const WAIT_BETWEEN_NOTIFICATES = 300000;

const IS_DEPART = true; // true always for now

// creates a node schedule
const createSchedule = (data) => {
    // let { _id, rule, station, bus, mail, scheduleTrigger, times, webPushSub, paused } = data;
    // let { _id, rule } = data;

    let rule = { ...data.rule };

    // console.log(data.rule);

    
    if(IS_DEPART) rule = subtractMinutes(rule, 60);
    
    if(rule.dayOfWeek && rule.dayOfWeek.length === 0) delete rule.dayOfWeek;

    // console.log(rule);
    // console.log(data.rule);

    // console.log(data._id);

    const job = schedule.scheduleJob(data._id, rule, async () => 
        executeSchedule(data).catch(err=> `job failed => ${err}`));
    
    if(!job) console.log(`Schedule ${data._id} failed running`);
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
const busWaiter = async (targetRule, station, bus, scheduleTrigger) => {

    const max = scheduleTrigger.max;
    let waiting = true;
    const targetDate = new Date();
    targetDate.setHours(targetRule.hour);
    targetDate.setMinutes(targetRule.minute);

    console.log(`targetDate: ${targetDate}`);

    while(waiting) {
        console.log('iteration');

        let arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));
        let timeNow = new Date(); // 9:00  9:14
        console.log(`now: ${timeNow}`);
        const timeWithMax = dateAddMinutes(timeNow, max); // 9:18   9:32  9:34
        console.log(`after walk: ${timeWithMax}`);
        if(timeWithMax > targetDate) {
            console.log('walking distance too big, leaving');
            waiting = false;
            break;
        }

        const highestArrivalTime = Math.max(...arrivalTimes); // 5,11,32   16,25,41
        let timeWithArrival = dateAddMinutes(timeNow, highestArrivalTime); // 9:32 10:13

        console.log(`highest bus: ${highestArrivalTime}`);
        console.log(`with highest bus: ${timeWithArrival}`);

        if(timeWithArrival < targetDate){
            console.log('far from target date, sleeping..');

            let tosleep = highestArrivalTime-max;
            tosleep = tosleep < 5 ? 5 : tosleep;
            console.log(`sleeping for ${tosleep} mins`); // 14
            await sleep(tosleep * 60000); 
        } 
        else {
            console.log('calculating optimal time and leaving');

            waiting = false;
            const lastSleep = getOptimalTime(arrivalTimes, targetDate)
            let tosleep = lastSleep-max-5;
            console.log(`sleeping for ${tosleep} mins`);
            await sleep(tosleep * 60000);
        } 
    }
    return await preciseBusWaiter(scheduleTrigger, station, bus);

}


const preciseBusWaiter = async (scheduleTrigger, station, bus) => {

    console.log('calculating precise time');

    for(let not_i = 0; not_i < 40; not_i++) {
        let arrivalTimes = await HelperMethods.busArrivalList(station, bus).catch(err => console.log(err));

        const max = scheduleTrigger.max;
        const min = scheduleTrigger.min;

        arrivalTimes = arrivalTimes.filter((time)=> time <= max && time >= min);

        if(arrivalTimes.length > 0) {
            console.log('got them!');
            console.log(arrivalTimes);
            return arrivalTimes;
        }
        await sleep(WAIT_BETWEEN_CHECKS);
    }
    return;
}
const sleep = (howlong) => new Promise(resolve=> setTimeout(resolve, howlong));

// Ran once the node schedule is activated.
const executeSchedule = async (data) => {
    const { _id, rule, station, bus, mail, scheduleTrigger, times, webPushSub, paused } = data;
    if(paused) { console.log('job is paused so exiting'); return; }

    console.log("job started");
    let arrivalTimes;

    // arrivalTimes = await preciseBusWaiter(scheduleTrigger, station, bus).catch(err=> console.log(err));
    arrivalTimes = await busWaiter(rule, station, bus, scheduleTrigger).catch(err=> console.log(err));
    notificate(_id, arrivalTimes, bus, webPushSub, mail);

    await sleep(WAIT_BETWEEN_NOTIFICATES);

    for (let not_i = 1; not_i < times; not_i++) {

        if(paused) { console.log('job is paused so exiting'); return; } // done in case schedule already running when paused

        console.log("checking more..");
        arrivalTimes = await preciseBusWaiter(scheduleTrigger, station, bus);

        if(schedulesToStopInstantly.includes(_id)) {
            schedulesToStopInstantly.splice(schedulesToStopInstantly.indexOf(_id), 1);
            console.log("Schedule canceled, exiting.");
            return;
        }

        notificate(_id, arrivalTimes, bus, webPushSub, mail);

        if(times > 1) {
            console.log("waiting 3minutes..");
            await sleep(WAIT_BETWEEN_NOTIFICATES);
        }
    }
}


const notificate = (id, arrivalTimes, bus, webPushSub, mail) => {
    let notificationMessage = {title: "hey", message: "nothing"};

    if(!arrivalTimes) {
        notificationMessage.title = `No buses found.`;
    }
    else {
        const now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        hour = hour < 10 ? `0${hour}` : hour;
        minute = minute < 10 ? `0${minute}` : minute;

        const timeNow = `${hour}:${minute}`;
        notificationMessage.title = `${bus} coming in ${arrivalTimes[0]} minutes, prepare!`;
        notificationMessage.message = arrivalTimes[1] ? 
        `Next bus in ${arrivalTimes[1]} minutes.\nGenerated at ${timeNow}` :
        `Generated at ${timeNow}`;
        notificationMessage.id = id;
    }

    if(webPushSub) Notification.sendPush(webPushSub, notificationMessage);
    else Notification.sendMail(mail, notificationMessage);
}

module.exports = { initSchedules, createSchedule, cancelSchedule, stopCurrentSchedle};
