
const ApiSources = require('./apiSources');
const busObjParse = require('./utils/busApiParser');

const isMock = process.env.API_MOCK;

class HelperMethods {
    static async busArrivalList (station, bus) {
        if(isMock === 'true') return [5,10,15];

        const response = await ApiSources.getBusData(station);
        const userData = busObjParse(response.data, bus);
        return userData;
    }
}

module.exports = HelperMethods;
// if( response.status != 200 ){
//     throw new ServerError(response.status, "Failed getting bus data");
// }