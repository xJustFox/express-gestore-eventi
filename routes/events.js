const events = require('../controllers/events.js');
const express = require('express');
const router = express.Router();

router.get('/', events.index);
router.post('/', events.store);
router.put('/:event', events.update);

module.exports = router;