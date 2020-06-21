// Gets list of bus objects on some station and returns MinutesToArrivalList by busId
const busObjParse = (busInfos, bus) => {
    let busTimes;
    const busInfo = busInfos.find((obj)=> obj.Shilut === String(bus));
    if(busInfo) {
        busTimes = busInfo.MinutesToArrivalList;
    }
    return busTimes;
}

module.exports = busObjParse;