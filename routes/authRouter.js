const router = require('express').Router();
const authCtrl = require('../controllers/authController');

router.post('/', authCtrl.postLogin);

module.exports = router
