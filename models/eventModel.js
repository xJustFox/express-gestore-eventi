
const { readJSON, writeJSON } = require('../utils.js');
class Event {
    static counter = 0;
    static events = readJSON('eventsDB');

    constructor(title, description, date, maxSeats) {
        this.id = Event.counter++,
            this.title = title,
            this.description = description,
            this.date = date,
            this.maxSeats
    };

    static getEvents(filters = {}) {
        let events = this.events;

        if (filters.title) {
            events = events.filter(e => e.title.includes(filters.title));
        }

        if (filters.date) {
            events = events.filter(e => e.date === filters.date);
        }

        if (filters.maxSeats) {
            events = events.filter(e => e.maxSeats === Number(filters.maxSeats));
        }

        return events;
    }

    static getSingleEvent(findId) {
        const event = this.events.find(e => e.id === Number(findId));

        console.log(event);


        if (!event) {
            return { statusCode: 404, error: 'Not Found' };
        }

        return event;
    }
}

module.exports = Event;
