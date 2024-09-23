const eventModels = require('../models/eventModel.js');

const index = (req, res) => {
    const filters = {
        title: req.query.title || null,
        date: req.query.date || null,
        maxSeats: req.query.maxSeats || null
    }
    const event = eventModels.getEvents(filters);
    res.status(200).json(event);
};

const show = (req, res) => {
    const eventId = req.params.event;
    
    const event = eventModels.getSingleEvent(eventId);

    if (event.error) {
        return res.status(event.statusCode).json(event);
    }

    return res.status(200).json(event);
};

const store = (req, res) => {
    res.status(200).send(`${req.method} ${req.originalUrl}`);
};

const update = (req, res) => {
    res.status(200).send(`${req.method} ${req.originalUrl}`);
};

module.exports = {
    index,
    show,
    store,
    update
}