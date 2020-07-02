
const axios = require('axios');
const https = require('https');
const { ServerError } = require('../helpers/utils/error');

const request = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
});

class ApiSources {
    static async getBusData(station) {
        const data = await request.get(`https://bus.gov.il/WebApi/api/passengerinfo/GetRealtimeBusLineListByBustop/${station}/he/false`)
        .catch((err)=> { throw new ServerError(err.response.status, "Failed getting bus data") });
        return data;
    }
}

module.exports = ApiSources;