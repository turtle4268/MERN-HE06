var express = require('express'),
    index   = require('../controllers/index'),
    person  = require('../controllers/person'),
    another  = require('../controllers/another'),
    router  = express.Router();

router.route('/').get(index);
router.route('/person').post(person);
router.route('/another').get(another);

module.exports = router;
