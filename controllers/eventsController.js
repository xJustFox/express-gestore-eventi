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

    res.status(200).json(event);
};

const store = (req, res) => {
    if (req.is('multipart/form-data')) {

        if (!req.body.title || !req.body.description || !req.body.date || !req.body.maxSeats) {
           return res.status(400).json({ statusCode: 400, error: 'Some data missing' });
        }
        
        const event = eventModels.addNewEvent(req.body);
    
        return res.status(event.statusCode).json(event);
    } else {
        return res.status(415).send('Content-Type Not Acceptable');
    }
    
};

const update = (req, res) => {

    if (req.is('multipart/form-data')) {
        if (!req.params.id) {
            return res.status(400).json({ statusCode: 400, error: 'Some data missing' });
        }
        
        if (!req.body.title || !req.body.description || !req.body.date || !req.body.maxSeats) {
            return res.status(400).json({ statusCode: 400, error: 'Some data missing' });
        }

        const  updatedData = {
            findId: req.params.id,
            newTitle: req.body.title,
            newDescription: req.body.description,
            newDate: req.body.date,
            newMaxSeats: req.body.maxSeats
        }
        
        const event = eventModels.updateEvent(updatedData);
    
        return res.status(event.statusCode).json(event);
    } else {
        return res.status(415).send('Content-Type Not Acceptable');
    }
};

module.exports = {
    index,
    show,
    store,
    update
}