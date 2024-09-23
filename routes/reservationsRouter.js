const reservations = require('../controllers/reservationsController.js');
const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

router.get('/reservations', reservations.index);
router.post('/reservations', upload.none(), reservations.store);
router.delete('/reservations/:reservation')

module.exports = router;