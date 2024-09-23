const events = require('../controllers/eventsController.js');
const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

router.get('/', events.index);
router.post('/', upload.none(), events.store);
router.get('/:event', events.show);
router.put('/:event', events.update);

module.exports = router;