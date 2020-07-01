const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const schedulesSchema = require('../controllers/scheduleSchema');
chai.use(chaiHttp);

const should = chai.should();
const expect = chai.expect;

const randomData = {station: 555, bus: 11};
const randomDataBad = {station: 555, bus: "haha"};

const mock1 = {station: 123, bus: 45, rule: {hour: 5}, mail: "haha@gmail.com"};
const mock2 = {station: 123, bus: 45, rule: {hour: 5}, mail: "haha@haha.com", haha: "haha"};

before(async()=> {
    console.log("Waiting 3 seconds..");
    await new Promise(resolve => setTimeout(resolve, 3000));
});

beforeEach((done) => {
    schedulesSchema.deleteMany({}, (err) => { 
       done();           
    });        
});

describe('GET /schedules', () => {
    it('Should get all the schedules', async () => {
        const res = await chai.request(server).get('/schedules');
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
    });
});

describe('GET /schedule/:id', () => {
    it('Should get schedule', async () => {
        const schedule = await chai.request(server).post('/schedule').send(mock1);
        const res = await chai.request(server).get(`/schedule/${schedule.body.id}`);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id', schedule.body.id);
    });
    it('Should give 404 for not existing schedule', async () => {
        const res = await chai.request(server).get(`/schedule/haha`);
        res.should.have.status(404);
    });
});

describe('POST /schedule', () => {
    it('Should create schedule', async () => {
        const res = await chai.request(server).post('/schedule').send(mock1);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('bus', 45);
    });
    it('Should give 400 for bad request', async () => {
        const res = await chai.request(server).post('/schedule').send(mock2);
        res.should.have.status(400);
    });
});

describe('PUT /schedule/:id', () => {
    it('Should update schedule', async () => {
        const schedule = await chai.request(server).post('/schedule').send(mock1);
        const res = await chai.request(server).put(`/schedule/${schedule.body.id}`).send(randomData);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('bus', 11);
    });
    it('Should give 400 for bad request', async () => {
        const schedule = await chai.request(server).post('/schedule').send(mock1);
        const res = await chai.request(server).put(`/schedule/${schedule.body.id}`).send(randomDataBad);
        res.should.have.status(400);
    });
    it('Should give 404 for unknown id', async () => {
        const schedule = await chai.request(server).post('/schedule').send(mock1);
        const res = await chai.request(server).put(`/schedule/unknownId`).send(randomData);
        res.should.have.status(404);
    });
});

describe('DELETE /schedule/:id', () => {
    it('Should delete schedule', async () => {
        const schedule = await chai.request(server).post('/schedule').send(mock1);
        const res = await chai.request(server).delete(`/schedule/${schedule.body.id}`);
        res.should.have.status(200);
    });
    it('Should give 404 for not existing schedule', async () => {
        const res = await chai.request(server).delete(`/schedule/unknownId`);
        res.should.have.status(404);
    });
});

describe('GET /getInfo/:station/:bus', () => {
    it('Should get bus info', async () => {
        const res = await chai.request(server).get(`/getInfo/${123}/${55}`);
        res.should.have.status(200);
    });
});
