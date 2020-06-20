
const ApiSources = require('./apiSources.js');
const busObjParse = require('./utils/busApiParser')

class Methods {
    static busArrivalList = async (station, bus) => {
        const response = await ApiSources.getBusData(station);
        if( response.status != 200 ){
            throw new Error("Failed getting bus data");
        }
        const userData = busObjParse(response.data, bus);
        return userData;
    }
}

module.exports = Methods;