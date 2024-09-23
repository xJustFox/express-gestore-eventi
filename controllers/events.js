const index = (req, res) => {
    res.status(200).send(`${req.method} ${req.originalUrl}`);
};

const store = (req, res) => {
    res.status(200).send(`${req.method} ${req.originalUrl}`);
};

const update = (req, res) => {
    res.status(200).send(`${req.method} ${req.originalUrl}`);
};

module.exports = {
    index,
    store,
    update
}