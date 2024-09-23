
const { readJSON, writeJSON } = require('../utils.js');
class Event {
    static events = readJSON('eventsDB');
    static counter = this.events.length + 1;

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
    };

    static getSingleEvent(findId) {
        const event = this.events.find(e => e.id === Number(findId));

        if (!event) {
            return { statusCode: 404, error: 'Not Found' };
        }

        return event;
    };

    static addNewEvent(data = {}) {   
        const {title, description, date, maxSeats} = data;
        const newEvent = new Event(title, description, date, maxSeats)
        writeJSON('eventsDB', [...this.events, newEvent]);
        return {statusCode: 200, message: 'Added data'};
    };

    static updateEvent(data = {}) {
        const {findId, newTitle, newDescription, newDate, newMaxSeats} = data;
        const flagId = this.events.find(e => e.id === Number(findId));

        if (!flagId) {
            return {statusCode: 404, message: `Data with id:'${findId}' not found`};
        }

        const newEvents = this.events.map((e) => {
            if (e.id === Number(findId)) {
                return {
                    ...e,
                    title: newTitle,
                    description: newDescription,
                    date: newDate,
                    MaxSeats: newMaxSeats
                };
            }
            return e;
        });
        writeJSON('eventsDB', newEvents);
        return {statusCode: 200, message: 'Modified data'};
    }
}

module.exports = Event;
