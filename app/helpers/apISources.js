
const axios = require('axios');
const https = require('https');

const request = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
});

class ApiSources {

    static async getBusData(station) {
        const data = await request.get(`https://bus.gov.il/WebApi/api/passengerinfo/GetRealtimeBusLineListByBustop/${station}/he/false`).catch((err)=> err);
        return data;
    }
}

module.exports = ApiSources;