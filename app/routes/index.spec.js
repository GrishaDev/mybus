const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const schedulesSchema = require('../controllers/scheduleSchema');
chai.use(chaiHttp);

const auth = process.env.ADMIN_SECRET;
const baseurl = `/api/`

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
        const res = await chai.request(server).get('/api/schedules').set('auth', auth);
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
    });
    it('Should deny getting schedules when not admin', async () => {
        const res = await chai.request(server).get('/api/schedules');
        res.should.have.status(401);
    });
});

describe('GET /schedules/mail/:mail', () => {
    it('Should get schedules by mail as admin', async () => {
        const res = await chai.request(server).get('/api/schedules/mail/meme@gmail.com').set('auth', auth);
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0)
    });
    it('Should give 401 if trying to get schedules by mail if its not you', async () => {
        const token = await chai.request(server).post('/api/login').send({mail:"hacker@gmail.com"});
        const res = await chai.request(server).get(`/api/schedules/mail/otheruser@gmail.com`).set('auth', token.body);
        res.should.have.status(401);
    });
    it('Should return your schedules if its you.', async () => {
        const token = await chai.request(server).post('/api/login').send({mail:"legituser@gmail.com"});
        const res = await chai.request(server).get(`/api/schedules/mail/legituser@gmail.com`).set('auth', token.body);
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0)
    });
});

describe('GET /schedule/:id', () => {
    it('Should get schedule', async () => {
        const schedule = await chai.request(server).post('/api/schedule').send(mock1).set('auth', auth);
        const res = await chai.request(server).get(`/api/schedule/${schedule.body.id}`).set('auth', auth);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id', schedule.body.id);
    });
    it('Should give 404 for not existing schedule', async () => {
        const res = await chai.request(server).get(`/api/schedule/haha`).set('auth', auth);
        res.should.have.status(404);
    });
});

describe('POST /schedule', () => {
    it('Should create schedule', async () => {
        const res = await chai.request(server).post('/api/schedule').send(mock1).set('auth', auth);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('bus', 45);
    });
    it('Should give 400 for bad request', async () => {
        const res = await chai.request(server).post('/api/schedule').send(mock2).set('auth', auth);
        res.should.have.status(400);
    });
});

describe('PUT /schedule/:id', () => {
    it('Should update schedule', async () => {
        const schedule = await chai.request(server).post('/api/schedule').send(mock1).set('auth', auth);
        const res = await chai.request(server).put(`/api/schedule/${schedule.body.id}`).send(randomData).set('auth', auth);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('bus', 11);
    });
    it('Should give 400 for bad request', async () => {
        const schedule = await chai.request(server).post('/api/schedule').send(mock1).set('auth', auth);
        const res = await chai.request(server).put(`/api/schedule/${schedule.body.id}`).send(randomDataBad).set('auth', auth);
        res.should.have.status(400);
    });
    it('Should give 404 for unknown id', async () => {
        const schedule = await chai.request(server).post('/api/schedule').send(mock1).set('auth', auth);
        const res = await chai.request(server).put(`/api/schedule/unknownId`).send(randomData).set('auth', auth);
        res.should.have.status(404);
    });
    it('Should give 401 if trying to update what is not yours.', async () => {
        const schedule = await chai.request(server).post('/api/schedule').send(mock1).set('auth', auth);
        const token = await chai.request(server).post('/api/login').send({mail:"hacker@gmail.com"});
        const res = await chai.request(server).put(`/api/schedule/${schedule.body.id}`).send(randomData).set('auth', token.body);
        res.should.have.status(401);
    });
});

describe('DELETE /schedule/:id', () => {
    it('Should delete schedule', async () => {
        const schedule = await chai.request(server).post('/api/schedule').send(mock1).set('auth', auth);
        const res = await chai.request(server).delete(`/api/schedule/${schedule.body.id}`).set('auth', auth);
        res.should.have.status(200);
    });
    it('Should give 404 for not existing schedule', async () => {
        const res = await chai.request(server).delete(`/api/schedule/unknownId`).set('auth', auth);
        res.should.have.status(404);
    });
    it('Should give 401 if trying to delete what not yours.', async () => {
        const schedule = await chai.request(server).post('/api/schedule').send(mock1).set('auth', auth);
        const token = await chai.request(server).post('/api/login').send({mail:"hacker@gmail.com"});
        const res = await chai.request(server).delete(`/api/schedule/${schedule.body.id}`).set('auth', token.body);
        res.should.have.status(401);
    });
});

describe('POST /login', () => {
    it('Should login', async () => {
        const res = await chai.request(server).post('/api/login').send({mail: "random@haha.com"});
        res.should.have.status(200);
    });
});

describe('GET /getInfo/:station/:bus', () => {
    it('Should get bus info', async () => {
        const res = await chai.request(server).get(`/api/getInfo/${123}/${55}`).set('auth', auth);
        res.should.have.status(200);
    });
});
