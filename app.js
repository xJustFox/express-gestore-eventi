require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

const eventsRouter = require('./routes/eventsRouter.js');
const errorsFormatter = require('./middlewares/errorFormatter.js');
const routesNotFound = require('./middlewares/routesNotFound.js');

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/events', eventsRouter);

app.use(errorsFormatter);
app.use(routesNotFound);

app.listen(port,host, () => console.log(`Example app listening on  http://${host}:${port}`));