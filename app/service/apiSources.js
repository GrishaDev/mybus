
const axios = require('axios');
const https = require('https');
const { ServerError } = require('../helpers/utils/error');

const request = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
});

const key = process.env.HERE_APIKEY || '';

class ApiSources {

    static async getBusData(lat, lon) {
        const data = await request.get(`https://bus.gov.il/WebApi/api/passengerinfo/GetBusstopListByRadius/1/${lat}/${lon}/300/he/false`)
        .catch((err)=> { throw new ServerError(404, "Failed getting bus data") });
        return data;
    }

    static async getBusData(station) {
        const data = await request.get(`https://bus.gov.il/WebApi/api/passengerinfo/GetRealtimeBusLineListByBustop/${station}/he/false`)
        .catch((err)=> { throw new ServerError(404, "Failed getting bus data") });
        return data;
    }

    static async getStationByCordsHereApi(lat, lon) {
        const data = await request.get(`https://transit.hereapi.com/v8/stations?in=${lat},${lon}&apiKey=${key}`)
        .catch((err)=> { throw new ServerError(404, "Failed getting bus data") });
        return data;
    }

    // needs some kind of international station id.
    static async getBusDataHereApi(intStation) {
        const data = await request.get(`https://transit.hereapi.com/v8/departures?ids=${intStation}&apiKey=${key}`)
        .catch((err)=> { throw new ServerError(404, "Failed getting bus data") });
        return data;
    }
}

module.exports = ApiSources;