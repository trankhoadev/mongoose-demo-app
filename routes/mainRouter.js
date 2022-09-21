const router = require('express').Router();
const mainAuth = require('../controllers/mainController');

router.post('/createStudent', mainAuth.postAddStudent);

router.post('/findStudent', mainAuth.findStudent);

module.exports = router;