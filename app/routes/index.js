const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');


router.get('/schedules', (req, res, next)=>  controller.getSchedules(res).catch(next) );
router.get('/schedule/:id', (req, res, next)=> controller.getSchedule(req.params.id, res).catch(next) );
router.post('/schedule', (req, res, next)=> controller.addSchedule(req.body, res).catch(next) );
router.put('/schedule/:id', (req, res, next)=> controller.updateSchedule(req.params.id, req.body, res).catch(next) );
router.delete('/schedule/:id', (req, res, next)=> controller.deleteSchedule(req.params.id, res).catch(next) );

router.get('/getInfo/:station/:bus', (req, res, next)=> controller.getBusInfo(...Object.values(req.params), res).catch(next) );
module.exports = router;
