require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

const eventsRouter = require('./routes/events.js');

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/events', eventsRouter);

app.listen(port,host, () => console.log(`Example app listening on  http://${host}:${port}`));