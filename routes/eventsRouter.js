const events = require('../controllers/eventsController.js');
const express = require('express');
const router = express.Router();

router.get('/', events.index);
router.post('/', events.store);
router.get('/:event', events.show);
router.put('/:event', events.update);

module.exports = router;