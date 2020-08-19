
const dateAddMinutes = (date, minutes) => {
    const ms = minutes * 60000;
    const dateMs = date.getTime();
    return new Date(dateMs+ms);
}

const getOptimalTime = (minutesArr, targetDate) => {   // [20, 50, 120 ]  18:30
    const now = new Date();  // 17:50 
    
    let datesArr = minutesArr.map((minute)=> new Date(dateAddMinutes(now, minute)));  // 18:10,  18:40,  19:50

    const closest = datesArr.reduce((a, b) => {
        let aDiff = Math.abs(a - targetDate);
        let bDiff = Math.abs(b - targetDate);

        if (aDiff == bDiff) {
            // Choose largest vs smallest (> vs <)
            return a > b ? a : b;
        } else {
            return bDiff < aDiff ? b : a;
        }
    });
    const goodIndex = datesArr.indexOf(closest);
    return minutesArr[goodIndex]
}

const ruleConverter = rule => {
    let { hour, minute } = rule;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    return `${hour}:${minute}`;
}

module.exports = { dateAddMinutes, getOptimalTime, ruleConverter};