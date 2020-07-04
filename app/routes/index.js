const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
const { creationValidation, updateValidation } = require('./validator');
const { isAdmin } = require('./auth');

router.get('/schedules', isAdmin, (req, res, next)=>  controller.getSchedules(res).catch(next) );
router.get('/schedules/mail/:mail', isAdmin, (req, res, next)=>  controller.getSchedulesByMail(req.params.mail, res).catch(next) );
router.get('/schedule/:id', isAdmin , (req, res, next)=> controller.getSchedule(req.params.id, res).catch(next) );
router.post('/schedule', isAdmin, creationValidation, (req, res, next)=> controller.addSchedule(req.body, res).catch(next) );
router.put('/schedule/:id', isAdmin, updateValidation, (req, res, next)=> controller.updateSchedule(req.params.id, req.body, res).catch(next) );
router.delete('/schedule/:id', isAdmin, (req, res, next)=> controller.deleteSchedule(req.params.id, res).catch(next) );

router.post('/login', (req, res, next)=> controller.login(req.body, res).catch(next) );
router.post('/waw', (req, res, next)=> controller.waw(req.body, res).catch(next) );

router.get('/getInfo/:station/:bus', (req, res, next)=> controller.getBusInfo(...Object.values(req.params), res).catch(next) );

module.exports = router;
