const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/:station/:bus', (req, res, next)=> controller.getBusInfo(...Object.values(req.params), res).catch(next) );

router.get('/schedules', (req, res, next)=>  controller.viewSchedules(res, next).catch(next) );
router.post('/addSchedule', (req, res, next)=> controller.addSchedule(req.body, res).catch(next) );

module.exports = router;
