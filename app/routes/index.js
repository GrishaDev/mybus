const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
const { creationValidation, updateValidation, isMail } = require('./validator');
const { isAdmin, isAllowed, cheatTest, login } = require('./auth');
const wa = require('../helpers/utils/wrapAsync');

router.get('/schedules', isAdmin, wa(controller.getSchedules) );
router.get('/schedules/mail/:mail', isAllowed, cheatTest, wa(controller.getSchedulesByMail) );
router.get('/schedule/:id', isAdmin , wa(controller.getSchedule) );
router.get('/schedule/stopschedule/:id', isAllowed , wa(controller.stopCurrentSchedule) );
router.post('/schedule', isAllowed, creationValidation, wa(controller.addSchedule) );
router.put('/schedule/:id', isAllowed, updateValidation, wa(controller.updateSchedule) );
router.delete('/schedule/:id', isAllowed, wa(controller.deleteSchedule) );

router.post('/login', isMail, login, wa(controller.login) );

router.get('/bustime/:station/:bus', wa(controller.getBusInfo) );

module.exports = router;
