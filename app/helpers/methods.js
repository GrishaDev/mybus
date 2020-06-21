
const ApiSources = require('./apiSources');
const busObjParse = require('./utils/busApiParser');

class Methods {
    static async busArrivalList (station, bus) {
        const response = await ApiSources.getBusData(station);
        // if( response.status != 200 ){
        //     throw new ServerError(response.status, "Failed getting bus data");
        // }
        const userData = busObjParse(response.data, bus);
        return userData;
    }
}

module.exports = Methods;