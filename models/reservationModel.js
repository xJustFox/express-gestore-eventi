class Reservation {
    static counter = 0;

    constructor(firstName, lastName, email, eventId) {
        this.id = Reservation.counter++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.eventId = eventId;
    }

    get firstName() {
        return this.firstName;
    }

    set firstName(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('First name must be a non-empty string');
        }
        this.firstName = value;
    }

    get lastName() {
        return this.lastName;
    }

    set lastName(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Last name must be a non-empty string');
        }
        this.lastName = value;
    }

    get email() {
        return this.email;
    }

    set email(value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            throw new Error('Invalid email format');
        }
        this.email = value;
    }

    get eventId() {
        return this.eventId;
    }

    set eventId(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Event ID must be a positive number');
        }
        this.eventId = value;
    }
}

module.exports = Reservation;